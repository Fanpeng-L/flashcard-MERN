import { useEffect, useState } from "react";
import "./App.css";

type TDeck = {
  title: string;
  _id: string;
};

function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<TDeck[]>([]);

  async function createDeckHandler(e: React.FormEvent) {
    e.preventDefault();
    await fetch("http://localhost:5000/decks", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setTitle("");
  }

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
      <ul className="decks">
        {decks.map((deck) => (
          <li key={deck._id}>{deck.title}</li>
        ))}
      </ul>
      <form className="createDeck-form" onSubmit={createDeckHandler}>
        <label className="createDeck-label" htmlFor="deck-title">
          Deck Title:
        </label>
        <input
          className="createDeck-input"
          placeholder="Enter your deck title"
          id="deck-title"
          value={title}
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <button className="createDeck-btn">Create Card Deck</button>
      </form>
    </div>
  );
}

export default App;
