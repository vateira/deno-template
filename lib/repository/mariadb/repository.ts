import * as Base from "/lib/repository/repository.ts";

import { DB } from "/lib/repository/mariadb/db.ts";
import { UserRepository } from "/lib/repository/mariadb/user.ts";

export class Repository implements Base.Repository {
  user: UserRepository = new UserRepository();

  open() {
    DB.instance;
  }

  close() {
    DB.instance.close();
  }
}
