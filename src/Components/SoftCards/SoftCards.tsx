import { softCards } from "./cardsInfo";
import "./softCards.sass"
const SoftCards = () => {
  return (
    <ul className="softCardsContainer">
      {softCards.map((el) => (
        <li key={el.title}>
          <figure id={el.title.toLowerCase()}>
            <img src={el.src} alt="" />
          </figure>
          <p className="title">{el.title}</p>
          <p className="text">{el.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default SoftCards;
