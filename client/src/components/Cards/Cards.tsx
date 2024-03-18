import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import "./Cards.css";

export default function Cards() {
  const [front, setFront] = useState(true);

  return (
    <ul className="cards-list">
      <li className="cards-container">
        <div className="cards-content">
          <p className="cards-title" onClick={() => setFront(!front)}>
            {front ? "What is React" : "A library"}
          </p>
          <button className="cards-delete">
            <MdDeleteOutline size={20} />
          </button>
        </div>
        <button className="cards-edit">Edit</button>
      </li>
    </ul>
  );
}
