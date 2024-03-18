import { Request, Response } from "express";
import Deck from "../models/Deck";

export default async function getADeckController(req: Request, res: Response) {
  const deckId = req.params.deckId;
  const deck = await Deck.findById(deckId);
  res.json(deck);
}
