import * as Base from "/src/repository/repository.ts";

import { DB } from "/src/repository/mariadb/db.ts";
import { UserRepository } from "/src/repository/mariadb/user.ts";

export class Repository implements Base.Repository {
  user: UserRepository = new UserRepository();

  open() {
    DB.instance;
  }

  close() {
    DB.instance.close();
  }
}
