import { Application, Router } from "oakserver/oak";
import { Database, DataTypes, Model, MySQLConnector } from "denodb-temp";

const app = new Application();

const conn = new MySQLConnector({
  host: "localhost",
  username: "root",
  password: "root",
  database: "app",
});

const db = new Database(conn);

class User extends Model {
  static table = "users";
  static timestamps = false;
  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  };
}
db.link([User]);

const users = await User.select("name").all();
console.log(users);

const router = (new Router());
router.get("/", (context) => {
  context.response.body = "hello world";
});

console.log("run");
