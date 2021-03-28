import { Findable } from "/lib/repository/repository.ts";
import { User } from "/lib/entities/user.ts";
import * as Base from "./useCase.ts";
import { Customer } from "/lib/actors/customer.ts";

/// DTO for input
export class Input {
  constructor(readonly id: number) {}
}

/// DTO for output
export class Output {
  constructor(readonly name: string) {}
}

/// UseCase
export class UseCase<T extends Findable<User>> extends Base.UseCase<Customer> {
  constructor(readonly repository: T, readonly actor: Customer) {
    super(actor);
  }

  async interact(
    input: Input,
  ): Promise<Output | null> {
    const result = await this.repository.find({ id: input.id });

    if (result != null) {
      return new Output(result.name);
    } else {
      return null;
    }
  }
}
