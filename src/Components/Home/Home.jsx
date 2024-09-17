import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div id='mainDiv'>
      <div className='left'></div>
      <div className='innerDiv'>
        <span className='smallhead'>Spring/Summer Collection</span>
        <span className='mainhead'>GET UP TO 30% OFF</span>
        <span className='mainhead'>NEW ARRIVALS</span>

        <NavLink className="items" to="/product">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className='btn'>
            Shop Now
          </motion.button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
