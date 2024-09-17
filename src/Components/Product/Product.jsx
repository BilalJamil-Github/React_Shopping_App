import React, { useEffect, useState } from 'react'
import './Product.css'
import Productbox from './Productbox/Productbox';
import myproducts from './data.json';
function Product({handleProductClick}) {
  let [displayfilter, setdisplayfilter] = useState(false);
  let [filterValue , setfilterValue] = useState('Popular');
  let [products , setproducts] = useState(myproducts);

  
 useEffect(()=>{
  switch(filterValue){
    case 'A-Z':
      products.sort((a , b)=> a.name.localeCompare(b.name))
      setproducts(products)
    break;
    case 'Z-A':
      products.sort((a , b)=> a.name.localeCompare(b.name))
      setproducts(products.reverse())
    break;
    case 'Popular':
      products.sort((a, b) => b.star - a.star)
  }
 } , [filterValue])



  return (
    <div className='mainDiv'> 
          <div className='topBar'>
            <div className='flex col right underTop'>
            <span className='heads'>grab upto 50% with Coupon</span>
            <span className='heads'>on Selected Product</span>
            <button id='btn'>Get It</button>
            </div>
             <div>
                image here
             </div>
          </div>
          <div id='filterLine' className='flex row productfilter'>
          <span id='prohead'>Products</span>
         <div> 
{
displayfilter ? 
         <> <span>{filterValue}  </span> <span style={{marginLeft:'100px'}} id='filterbtn' onClick={()=>{setdisplayfilter(!displayfilter)}}>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
          filter </span> </>:  <>  <span>{filterValue}  </span> <span id='filterbtn' onClick={()=>{setdisplayfilter(!displayfilter)}}>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
          filter </span></>

}   
     {
      displayfilter ?  <div className='menu_box' style={{zIndex:2}}>
      <span className='menu_list' onClick={()=>{setfilterValue('A-Z')}}>
       <span> A-Z</span>
        </span>
      <span className='menu_list'  onClick={()=>{setfilterValue('Z-A')}}>
      <span> Z-A</span>
      </span>
      <span className='menu_list'  onClick={()=>{setfilterValue('Popular')}}>
      <span>Popular</span>
      </span>
  </div>  : <></>
     }   

          </div> 
          </div>
          <div id='productdisplay'>
            {
          products.map((element)=>{
              return <Productbox name={element.name} id={element.id} star={element.star} price={element.price} image={element.img}/>
          })
        }
          </div>
   
          <div>

          </div>
    </div>
  )
}

export default Product