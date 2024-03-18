import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <a className="logo" href="/">
        <img src={logo} height={50} />
      </a>
      <button className="records-btn">Records</button>
    </div>
  );
}

export default Header;
