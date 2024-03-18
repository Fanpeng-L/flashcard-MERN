import "./Cards.css";
import { MdDeleteOutline } from "react-icons/md";

export default function Cards() {
  return (
    <ul className="cards-list">
      <li className="cards-container">
        <div className="cards-content">
          <p className="cards-title">card title</p>
          <button className="cards-delete">
            <MdDeleteOutline size={20} />
          </button>
        </div>
        <button className="cards-edit">Edit</button>
      </li>
    </ul>
  );
}
