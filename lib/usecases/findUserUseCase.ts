import { Findable } from "/lib/repository/repository.ts";
import { User } from "/lib/entities/user.ts";

export class FindUserInput {
  constructor(readonly id: number) {}
}

export class FindUserOutput {
  constructor(readonly name: string) {}
}

export class FindUserUseCase<T extends Findable<User>> {
  constructor(readonly repository: T) {}

  async interact(input: FindUserInput): Promise<FindUserOutput | null> {
    const result = await this.repository.find({ id: input.id });

    if (result != null) {
      return new FindUserOutput(result.name);
    } else {
      return null;
    }
  }
}
