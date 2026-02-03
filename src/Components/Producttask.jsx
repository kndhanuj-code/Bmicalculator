import React from 'react';

const Producttask = () => {

  const products = [
    { id: 1, name: "Laptop", brand: "Dell", price: 55000 },
    { id: 2, name: "Phone", brand: "Samsung", price: 30000 },
    { id: 3, name: "Headphones", brand: "Sony", price: 8000 },
    { id: 4, name: "Tablet", brand: "Apple", price: 70000 },
    { id: 5, name: "Monitor", brand: "LG", price: 15000 }
  ];

  const filterprice = products.filter(p => p.price < 20000);

       

  return (
    <div>
      

      {filterprice.map(product => (
        <p key={product.id}>
          <p>Name: {product.name}</p>
          <p>Brand: {product.brand}</p>
          <p>Price: {product.price}</p>
         
        </p>
      ))}
    </div>
  );
};

export default Producttask;
