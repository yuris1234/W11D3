import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { incrementItem, decrementItem, removeItem } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);

  // useEffect(() => {
  //   setCount(item.count);
  // }, [item.count]);

  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(removeItem(item.id));
  }

  const addCount = (e) => {
    debugger
    setCount(count+1);
    dispatch(incrementItem(item.id, count))
    debugger
    // item.count += 1;
  }

  const decreaseCount = (e) => {
    if (count === 1) {
      dispatch(removeItem(item.id));
    } else {
      setCount(count-1);
      dispatch(decrementItem(item.id, count));
    }
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
          onClick={addCount}
          className="cart-item-button"
        >
          +
        </button>
        <button
          onClick={decreaseCount}
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