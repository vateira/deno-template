import { DataTypes, Model } from "denodb-temp";
import { Listable, Findable } from "/src/repository/repository.ts";
import { User } from "/src/entities/user.ts";
import { DB } from "/src/repository/mariadb/db.ts";

export class UserRepository implements Listable<User>, Findable<User> {
  async list(): Promise<User[]> {
    const xs = (await UserModel.select("*").all()) as UserModel[];

    return xs.map((x: UserModel) => ({
      id: x.id as number,
      name: x.name as string,
    }));
  }

  async find(query: { id?: number }): Promise<User | null> {
    const xs = await UserModel.select("*")
      .where({ id: query.id ?? null })
      .get();
    if (xs instanceof Array) {
      const x = xs[0];
      return {
        id: x.id as number,
        name: x.name as string,
      };
    } else {
      return null;
    }
  }
}

class UserModel extends Model {
  static table = "users";
  static timestamps = false;
  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  };
}

DB.instance.db.link([UserModel]);
