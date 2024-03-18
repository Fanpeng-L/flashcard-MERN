import { API_URL } from "./config";

export type TDeck = {
  title: string;
  _id: string;
};

export async function getADeck(): Promise<TDeck[]> {
  const response = await fetch(`${API_URL}/decks`);
  return response.json();
}
