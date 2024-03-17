import "./Header.css";
import flashcard from "/flash-card.png";

function Header() {
  return (
    <div className="header">
      <a className="logo" href="/">
        <img src={flashcard} height={60} />
        <h1>Flashcard Generator</h1>
      </a>
      <button className="login-btn">Your Records</button>
    </div>
  );
}

export default Header;
