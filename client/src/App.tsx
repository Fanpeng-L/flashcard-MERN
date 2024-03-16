import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");

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

  return (
    <div className="App">
      <form onSubmit={createDeckHandler}>
        <label htmlFor="deck-title">Deck Title</label>
        <input
          id="deck-title"
          value={title}
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <button>Create Card Deck</button>
      </form>
    </div>
  );
}

export default App;
