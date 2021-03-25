import { Database, MySQLConnector } from "denodb-temp";

export class DB {
  private database: Database;
  private conn: MySQLConnector;

  private static _instance: DB;
  private constructor() {
    this.conn = new MySQLConnector({
      host: "localhost",
      username: "root",
      password: "root",
      database: "app",
      port: 3307,
    });
    this.database = new Database(this.conn);
  }

  get db(): Database {
    return this.database;
  }

  static get instance(): DB {
    if (!this._instance) {
      this._instance = new DB();
    }
    return this._instance;
  }

  close() {
    this.conn.close();
  }
}
