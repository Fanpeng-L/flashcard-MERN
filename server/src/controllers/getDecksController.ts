import { Request, Response } from "express";
import Deck from "../models/Deck";

async function getDecksController(req: Request, res: Response) {
  const decks = await Deck.find()
    .then((decks) => res.json(decks))
    .catch((err) => res.json(err));
}

export default getDecksController;
