import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(removeItem(item.id));
  }


  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button"
        >
          +
        </button>
        <button
          className="cart-item-button"
        >
          -
        </button>
        <button
          onClick={handleClick}
          className="cart-item-button"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;