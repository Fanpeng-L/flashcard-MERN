import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Deck from "./pages/Deck";
import Home from "./pages/Home";
import Card from "./pages/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/decks/:deckId" element={<Deck />} />
          <Route path="/decks/:deckId/cards/:cardId" element={<Card />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
