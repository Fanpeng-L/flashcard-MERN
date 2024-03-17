import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "./models/Deck";
import cors from "cors";

import { config } from "dotenv";
import getDecksController from "./controllers/getDecksController";
import createDeckController from "./controllers/createDeckController";
import deleteDeckController from "./controllers/deleteDeckController";
config();

const app = express();

const port = 5000;

//middleware to translate json data which sent from client
app.use(express.json());
//fix cors error
app.use(cors());

//GET all decks
app.get("/decks", getDecksController);

//POST a new deck
app.post("/decks", createDeckController);

//DELETE a deck
app.delete("/decks/:deckId", deleteDeckController);

// connect to mongoose
mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(port, () => {
    console.log(`The app listening on port ${port}`);
  });
});
