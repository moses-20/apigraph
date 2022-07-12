import express, { Express, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "graph.schema";
import cors from "cors";
import { actions, logs } from "faker";

const app: Express = express();

app.use(cors());
app.use(
  "/api",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/mock/logs", (req: Request, res: Response) => {
  return res.status(200).json({ logs });
});

app.get("/mock/actions", (req: Request, res: Response) => {
  return res.status(200).json({ actions });
});

app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .send(`<p style='text-align: center'> WELCOME TO API-GRAPH </p>`);
});

app.get("/*", (req: Request, res: Response) => {
  res.status(400).send(`<p style='text-align: center'> NO WAY NEAR HOME </p>`);
});

export default app;
