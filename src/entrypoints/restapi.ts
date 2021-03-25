import { Application, Router } from "oakserver/oak";
import { Repository } from "/src/repository/mariadb/repository.ts";
import SearchUsersUseCase from "/src/usecases/searchUsersUseCase.ts";
import {
  FindUserUseCase,
  FindUserInput,
} from "/src/usecases/findUserUseCase.ts";
import { Presenters } from "/src/presenters/json/presenters.ts";

export class RestApi {
  async run() {
    const app = new Application();
    const router = new Router();
    const repository = new Repository();
    const presenters = new Presenters();
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
    app.use(router.routes());
    repository.open();
    console.log("start");
    await app.listen({ port: 8000 });
    repository.close();
  }
}
