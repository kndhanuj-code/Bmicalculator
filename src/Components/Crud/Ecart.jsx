import axios from "axios";
import React, { useEffect, useState } from "react";

const Ecart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

 
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=10")
      .then((res) => setProducts(res.data));
  }, []);

  
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

 
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div  >
      
      
      <div >
        <h2>Products</h2>
        <div style={{display:'flex' , flexWrap:'wrap' , gap:'10px'
          
        }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "15px",
              width: "220px",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "150px", objectFit: "contain" }}
            />

            <h4 style={{ fontSize: "14px" }}>{product.title}</h4>
            <p>₹ {product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

   
      <div>
        <h2>Cart</h2>

        {cart.length === 0 && <p>Cart is empty</p>}

        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              borderBottom: "1px solid #ddd",
              marginBottom: "10px",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "50px", height: "50px", objectFit: "contain" }}
            />

            <p style={{ fontSize: "14px" }}>
              {item.title} × {item.quantity}
            </p>

            <p>₹ {item.price * item.quantity}</p>
          </div>
        ))}
         </div>
        <h3>Total: ₹ {totalAmount.toFixed(2)}</h3>
      </div>

    </div>
  );
};

export default Ecart;
