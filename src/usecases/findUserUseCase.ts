import { Findable } from "/src/repository/repository.ts";
import { User } from "/src/entities/user.ts";

export class FindUserInput {
  constructor(readonly id: number) {}
}

export class FindUserOutput {
  constructor(readonly name: string) {}
}

export class FindUserUseCase<T extends Findable<User>> {
  constructor(readonly repository: T) {}

  async interact(input: FindUserInput): Promise<FindUserOutput | null> {
    return await this.repository.find({ id: input.id });
  }
}
