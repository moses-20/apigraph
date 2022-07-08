import express, { Express, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "graph.schema";

const app: Express = express();

app.use(
  "/api",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/:name", (req: Request, res: Response) => {
  const name: string = req.params.name;
  console.log(`${name} logged in`);

  res.status(200).send(`${name} logged in`);
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).send(`<p style='text-align: center'> welcome </p>`);
});

export default app;
