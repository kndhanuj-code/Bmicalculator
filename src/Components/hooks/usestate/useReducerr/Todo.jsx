import React, { useReducer } from "react";

const Todo = () => {
  
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
  ];

  
  const initialState = {
    cart: [],
  };

 
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM": {
        const existingItem = state.cart.find(
          (item) => item.id === action.payload.id
        );

        if (existingItem) {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            ),
          };
        }

        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty: 1 }],
        };
      }

      case "REMOVE_ITEM":
        return {
          ...state,
          cart: state.cart.filter(
            (item) => item.id !== action.payload
          ),
        };

      case "UPDATE_QTY":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: action.payload.qty }
              : item
          ),
        };

      case "CLEAR_CART":
        return {
          ...state,
          cart: [],
        };

      default:
        return state;
    }
  };

  
  const [state, dispatch] = useReducer(cartReducer, initialState);

  
  const totalPrice = state.cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2> Shopping Cart (useReducer)</h2>

    
      <h3>Products</h3>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} - ₹{product.price}
          </span>
          <button
            onClick={() =>
              dispatch({ type: "ADD_ITEM", payload: product })
            }
            style={{ marginLeft: "10px" }}
          >
            Add
          </button>
        </div>
      ))}

      <hr />

      <h3>Cart Items</h3>
      {state.cart.length === 0 && <p>Cart is empty</p>}

      {state.cart.map((item) => (
        <div key={item.id}>
          <span>
            {item.name} - ₹{item.price}
          </span>
          <input
            type="number"
            min="1"
            value={item.qty}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_QTY",
                payload: {
                  id: item.id,
                  qty: Number(e.target.value),
                },
              })
            }
            style={{ width: "50px", margin: "0 10px" }}
          />
          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_ITEM",
                payload: item.id,
              })
            }
          >
            Remove
          </button>
        </div>
      ))}

      <hr />

      <h3>Total Price: ₹{totalPrice}</h3>

      <button
        onClick={() => dispatch({ type: "CLEAR_CART" })}
        disabled={state.cart.length === 0}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Todo;
