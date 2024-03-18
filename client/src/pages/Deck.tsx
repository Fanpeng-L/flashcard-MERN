import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import "./Deck.css";
import Cards from "../components/Cards/Cards";
import cardIcon from "../assets/card.png";

export default function Deck() {
  //passing props through Links
  const location = useLocation();
  const { title } = location.state;
  console.log(location.state);

  return (
    <div>
      <Header />

      <div className="deck-main-container">
        <section className="deck-left-container">
          <div className="deck-title">
            <img src={cardIcon} height={36} />
            <h1>{title}</h1>
          </div>
          <h3>You created 10000000 cards in this set!</h3>
          <form className="createCard-form">
            <h4>Let's Create a New Card!</h4>
            <div className="createCard-input-wrapper">
              <div className="createCard-input-question">
                <input
                  className="createCard-input"
                  placeholder=""
                  id="card-title"
                  // value={}
                  type="text"
                  // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  //   setTitle(e.target.value);
                  // }}
                />
                <label htmlFor="card-title" className="createCard-label">
                  Add a Question for it
                </label>
              </div>
              <div className="createCard-input-answer">
                <input
                  className="createCard-input"
                  placeholder=""
                  id="card-title"
                  // value={}
                  type="text"
                  // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  //   setTitle(e.target.value);
                  // }}
                />
                <label htmlFor="card-title" className="createCard-label">
                  Add a Answer for it
                </label>
              </div>
            </div>

            <button className="createCard-btn">Create</button>
          </form>
        </section>

        <section className="deck-right-container">
          <Cards />
        </section>
      </div>
    </div>
  );
}
