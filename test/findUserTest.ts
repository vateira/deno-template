import { delay } from "https://deno.land/std@0.90.0/async/delay.ts";
import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import { Repository } from "/lib/repository/mariadb/repository.ts";

import {
  FindUserInput,
  FindUserOutput,
  FindUserUseCase,
} from "/lib/usecases/findUserUseCase.ts";

Deno.test("async hello world", async () => {
  const repository = new Repository();
  const input = new FindUserInput(1);
  const output = await new FindUserUseCase(repository.user).interact(input);
  assertEquals(output, new FindUserOutput("sosuke"), "wrong name");
  repository.close();
});
