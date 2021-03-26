import { Listable } from "/lib/repository/repository.ts";
import { User } from "/lib/entities/user.ts";

export default class SearchUsersUseCase<T extends Listable<User>> {
  constructor(readonly repository: T) {}

  async interact(): Promise<User[]> {
    return await this.repository.list();
  }
}
