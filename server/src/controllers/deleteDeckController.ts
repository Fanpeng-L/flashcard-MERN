import { Request, Response } from "express";
import Deck from "../models/Deck";

async function deleteDeckController(req: Request, res: Response) {
  const deckId = req.params.deckId;
  const deleteDeck = await Deck.findByIdAndDelete(deckId);
  res.json(deleteDeck);
}

export default deleteDeckController;
