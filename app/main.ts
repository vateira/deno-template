import { Application, Router } from "oakserver/oak";
import { Repository } from "/lib/repository/mariadb/repository.ts";
import SearchUsersUseCase from "/lib/usecases/searchUsersUseCase.ts";
import {
  FindUserInput,
  FindUserUseCase,
} from "/lib/usecases/findUserUseCase.ts";
import { Presenters } from "/lib/presenters/json/presenters.ts";

const app = new Application();
const router = new Router();
const repository = new Repository();
const presenters = new Presenters();

app.addEventListener("error", (evt) => {
  // Will log the thrown error to the console.
  console.error(evt.error);
});

router
  .get("/users", async (context) => {
    const usecase = new SearchUsersUseCase(repository.user);
    const xs = await usecase.interact();
    context.response.body = presenters.users.from(xs);
  })
  .get("/users/:id", async (context) => {
    const id = parseInt(context.params.id ?? "") ?? 0;
    const usecase = new FindUserUseCase(repository.user);
    const input = new FindUserInput(id);
    const output = await usecase.interact(input);
    context.response.body = presenters.user.from(output!);
  });

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(router.routes());
repository.open();
console.log("start");
await app.listen({ port: 8000 });
repository.close();
