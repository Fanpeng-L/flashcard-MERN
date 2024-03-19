import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { config } from "dotenv";
import getDecksController from "./controllers/getDecksController";
import createDeckController from "./controllers/createDeckController";
import deleteDeckController from "./controllers/deleteDeckController";
import path from "path";
import getADeckController from "./controllers/getADeckController";
config();

const app = express();

app.use("/static", express.static(path.join(__dirname, "dist")));

const PORT = process.env.PORT || 5000;

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
//GET a specific deck
app.get("/decks/:deckId", getADeckController);

// connect to mongoose
mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(PORT, () => {
    console.log(`The app listening on port ${PORT}`);
  });
});
