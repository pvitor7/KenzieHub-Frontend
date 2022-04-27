import "./styles.css";
import EditDeleteCard from "../EditDeleteCard";
import axios from "axios";

export const CardTechnology = ({ setVisibleEditCard, id, title, status, setId }) => {

  return (

    <li
      onClick={() => {
        setVisibleEditCard(true);
        setId(id);
      }}
      className="card-li"
      id={id}
    >
      <span className="card-tech-name"> {title} </span>
      <span className="card-tech-status">{status}</span>
    </li>
  );
};
