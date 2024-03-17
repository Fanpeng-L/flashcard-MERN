import { Request, Response } from "express";
import Deck from "../models/Deck";

async function getDecksController(req: Request, res: Response) {
  const decks = await Deck.find();
  res.json(decks);
}

export default getDecksController;
