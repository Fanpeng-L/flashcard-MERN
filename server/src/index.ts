import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "./models/Deck";
import { config } from "dotenv";
config();

const app = express();
const port = 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// connect to mongoose
mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
