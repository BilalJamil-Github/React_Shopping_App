import React, { Children, createContext, useContext, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import './Eachproduct.css';
import Header from '../Header/Header';
let Stars = 5;

function Eachproduct({ products }) {
 const { id } = useParams();  
 let [quantity, setQuantity] = useState(1); 
  const product = products.find(element => element.name === id);
console.log('Your Product' , product)
  const renderStars = (num) => {
    return [...Array(Stars)].map((_, index) => {
      return (
        <span
          key={index}
          className={`star ${index < num ? 'filled' : 'unfilled'}`}
        >
          ★
        </span>
      );
    });
  };

  const Addedtocart = ()=>{
    let obj = {
      name : `${product.name}`,
      price : `${product.price}`,
      quantity :`${quantity}` ,
      details: `${product.details}`,
      image : `${product.img}`,
      id: Math.random()
    }
    console.log(obj)
    let Cart = localStorage.getItem('Cart')
     if(Cart){
      Cart = JSON.parse(Cart);
      Cart.push(obj);   
      localStorage.setItem('Cart' , JSON.stringify(Cart))
     }else{
      localStorage.setItem('Cart' ,JSON.stringify([]));
      let Cart = localStorage.getItem('Cart');
      Cart = JSON.parse(Cart);
      Cart.push(obj);
      localStorage.setItem('Cart', JSON.stringify(Cart))
     }
     
       
  }



  const increament = ()=>{  
    quantity += 1
    setQuantity(quantity)
  }

  const decreament = ()=>{
   if(quantity > 1){
    quantity -= 1
   }
    setQuantity(quantity)
  }
const [name , setname] = useState('bilal')

  return (
    <>

  {product ? (
        <div className="eachproduct-container">
          <div className="eachproduct-box">
            <div className="eachproduct-left">
              <div className="eachproduct-image-container">
                <img src={product.img} className="eachproduct-image" alt="" />
              </div>
            </div>
            <div className="eachproduct-right">
              <div className="eachproduct-details">
                <h1>{product.name}</h1>
                <h3>{renderStars(product.star)} Ratings</h3>
                <h1 className="eachproduct-price">Price: {product.price}$</h1>
                <h3>Details:</h3> 
                <span className="eachproduct-description">{product.details}</span>
                <div className="quantity-box">
                  <button className="quantity-btn" onClick={()=>{decreament()}} >-</button>
                  <span className="quantity-text">{quantity}</span>
                  <button className="quantity-btn" onClick={()=>{increament()}} >+</button>
                </div>
                <div>
                   <button className='cartbtn' onClick={()=>{Addedtocart()}}>Add to Cart   <svg className='carticon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                   </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>

      ) : (
        <h1>Nothing to Show, Sorry</h1>
      )}
      
    </>
    
  );
}

export default Eachproduct;