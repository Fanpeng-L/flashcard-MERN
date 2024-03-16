import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "./models/Deck";
import cors from "cors";

import { config } from "dotenv";
config();

const app = express();

const port = 5000;

//middleware to translate json data which sent from client
app.use(express.json());
//fix cors error
app.use(cors());

app.post("/decks", async (req: Request, res: Response) => {
  console.log(req.body);
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

// connect to mongoose
mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(port, () => {
    console.log(`The app listening on port ${port}`);
  });
});
