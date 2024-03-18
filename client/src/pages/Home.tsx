import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { TDeck, getDecks } from "../api/getDecks";
import { createDeck } from "../api/createDeck";
import { deleteDeck } from "../api/deleteDeck";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Home.css";

export default function DecksList() {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<TDeck[]>([]);

  //create a new deck
  async function createDeckHandler(e: React.FormEvent) {
    e.preventDefault();
    const deck = await createDeck(title);
    setDecks([...decks, deck]);
    setTitle("");
  }

  //delete a deck
  async function deleteHandler(deckId: string) {
    await deleteDeck(deckId);
    //filter out the delete deck
    setDecks(decks.filter((deck) => deck._id !== deckId));
  }

  //fetch all decks
  useEffect(() => {
    async function fetchDecks() {
      const newDecks = await getDecks();
      setDecks(newDecks);
    }
    fetchDecks();
  }, []);

  return (
    <div>
      <Header />
      <p>THis is home page, shows all the Decks List</p>
      <h1 className="home-title">
        <span>Flash & Learn</span>: Your Shortcut to Mastery!
      </h1>
      <form className="createDeck-form" onSubmit={createDeckHandler}>
        <div className="createDeck-input-wrapper">
          <input
            className="createDeck-input"
            placeholder=""
            id="deck-title"
            value={title}
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="deck-title" className="createDeck-label">
            Enter your deck's title
          </label>
        </div>
        <button className="createDeck-btn">Create A Deck</button>
      </form>
      <h3 className="decks-intro">Here are all your flashcards sets:</h3>
      <ul className="decks">
        {decks.map((deck) => (
          <li key={deck._id}>
            <div
              onClick={() => deleteHandler(deck._id)}
              className="decks-delete-btn"
            >
              <MdDeleteOutline size={20} />
            </div>

            <Link to={`/decks/:${deck._id}`} className="decks-link">
              <div className="decks-link-title">{deck.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
