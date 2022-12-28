import chalk from "chalk";
import express from "express";
import appConfig from "./2-utils/appConfig";
import blockWednesday from "./3-middleware/blockWednsday";
import catchAll from "./3-middleware/catchAll";
import logRequest from "./3-middleware/logRequest";
import RouteNotFound from "./3-middleware/routeNotFound";
import router from "./6-controllers/bookController";

const app = express();

app.use(express.json());

app.use(logRequest);

// app.use(blockWednesday);

app.use("/api/books", router);

app.use("*", RouteNotFound);

app.use(catchAll);

app.listen(appConfig.port, () => {
  console.log(
    chalk.redBright.bgGreen.bold(
      `Listening to http://localhost:${appConfig.port}`
    )
  );
});
