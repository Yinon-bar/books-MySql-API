import chalk from "chalk";
import express from "express";
import appConfig from "./2-utils/appConfig";
import router from "./6-controllers/bookController";

const app = express();

app.use(express.json());

app.use("/api/books", router);

app.listen(appConfig.port, () => {
  console.log(
    chalk.redBright.bgGreen.bold(
      `Listening to http://localhost:${appConfig.port}`
    )
  );
});
