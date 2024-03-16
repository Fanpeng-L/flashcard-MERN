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

//GET all decks
app.get("/decks", async (req: Request, res: Response) => {
  const decks = await Deck.find();
  res.json(decks);
});

//POST a new deck
app.post("/decks", async (req: Request, res: Response) => {
  console.log(req.body);
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

//DELETE a deck
app.delete("/decks/:deckId", async (req: Request, res: Response) => {
  const deckId = req.params.deckId;
  const deleteDeck = await Deck.findByIdAndDelete(deckId);
  res.json(deleteDeck);
});

// connect to mongoose
mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(port, () => {
    console.log(`The app listening on port ${port}`);
  });
});
