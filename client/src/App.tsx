import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import "./App.css";
import { Link } from "react-router-dom";

type TDeck = {
  title: string;
  _id: string;
};

function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<TDeck[]>([]);

  //create a new deck
  async function createDeckHandler(e: React.FormEvent) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/decks", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deck = await response.json();
    setDecks([...decks, deck]);
    setTitle("");
  }

  //delete a deck
  async function deleteHandler(deckId: string) {
    await fetch(`http://localhost:5000/decks/${deckId}`, {
      method: "DELETE",
    });
    //filter out the delete deck
    setDecks(decks.filter((deck) => deck._id !== deckId));
  }

  //fetch all decks
  useEffect(() => {
    async function fetchDecks() {
      const newDecks = await fetch("http://localhost:5000/decks").then(
        (response) => response.json()
      );
      setDecks(newDecks);
    }
    fetchDecks();
  }, []);

  return (
    <div className="App">
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
        <button className="createDeck-btn">Create Card Deck</button>
      </form>

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
              {deck.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
