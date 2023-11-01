import { useDispatch } from "react-redux";
import { receiveItem } from "../../store/cart";

function ProduceDetails({ produce }) {
  const cartItem = {};

  const dispatch = useDispatch();

  const handleClick = e => {
    dispatch(receiveItem(produce.id))
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button onClick={handleClick}
          className={"plus-button" + (cartItem ? " selected" : "")}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;