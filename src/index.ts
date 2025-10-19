import express from "express";
import mongoose from "mongoose";
import pokemonRouter from "./routes/pokemon-routes.ts";

const app = express();

app.use(express.json());

app.use("/pokemon", pokemonRouter);

async function main() {
  const MONGODB_ROUTE = process.env.MONGODB_ROUTE;
  await mongoose.connect(MONGODB_ROUTE);
  console.log("Opened the mongoose connection.");

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
  });
}

main();
