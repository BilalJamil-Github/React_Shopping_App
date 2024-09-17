import React, { useState } from "react";
import "./Productbox.css"; 
import { NavLink } from 'react-router-dom'
import { createContext } from "react";
import App from "../../../App";
export const AppContext = createContext();
const Productbox = ({ name, price, image, details , star }) => {
let [arr , setarr] = useState([]);
let Stars = 5;

const renderStars = (num) => {
  return [...Array(Stars)].map((values , index)=>{
       if(index < num){
         return <span key={index}
         className={`star filled`}
         >★</span>
       }else{
        return <span key={index}
        className={`star unfilled`}
        >★</span>
       }
  })
};


  return (


   <NavLink to={`/product/${name}`}>
    <div className="product-box"> 
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">{price}$</p>
        <p className="product-description">{details}</p>
        <span>
          {renderStars(star)}
       </span>
      </div>
    </div>
    </NavLink>  
    
  );
};

export default Productbox;

