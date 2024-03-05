import { type Express } from "express";

function initializeExpressApp<T extends Express>(app: T): T {
  app.get("/hello", (req, res) => {
    res.status(200).send("Welcome!");
  });
  console.log("Express app initialized");
  return app;
}

export default initializeExpressApp;
