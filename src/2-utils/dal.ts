import chalk from "chalk";
import mysql from "mysql";
import appConfig from "./appConfig";

const connection = mysql.createPool({
  host: appConfig.host,
  user: appConfig.user,
  password: appConfig.password,
  database: appConfig.db,
});

function execute(SQL: string): Promise<any> {
  return new Promise((resolve, reject) => {
    connection.query(SQL, (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });
  });
}

export default { execute };
