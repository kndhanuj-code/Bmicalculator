import React from 'react'
import Productdet from './Productdet';
import { useLocation } from 'react-router-dom';


const Product = () => {
  let location=useLocation()
  let user=location?.state||'guest'

const products = [
  {
    name: "Wireless Mouse",
    price: 25.99,
    image: "https://uniquec.com/wp-content/uploads/235.jpg"
  },
  {
    name: "Mechanical Keyboard",
    price: 89.50,
    image: "https://m.media-amazon.com/images/I/61P7MvyRbUL.jpg"
  },
  {
    name: "HD Monitor",
    price: 199.99,
    image: "https://www.coconutlife.in/cdn/shop/files/10.jpg?v=1698858436"
  },
  {
    name: "USB-C Hub",
    price: 45.00,
    image: "https://m.media-amazon.com/images/I/61gAnE1L1wL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    name: "Noise Cancelling Headphones",
    price: 129.99,
    image: "https://pickurneeds.in/cdn/shop/files/T-40White1.3.jpg?v=1727266386"
  }
];





  return (
    <div>
      <Productdet ccard={products} />
    </div>
  )
}

export default Product
