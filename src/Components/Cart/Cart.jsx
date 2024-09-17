import React, {  useEffect, useMemo, useState  ,createContext} from 'react'
export const Cartcontext = createContext();
import Table from 'react-bootstrap/Table';
import Header from '../Header/Header';
import './Cart.css'
function Cart() {
  let [Cart , setCart] = useState([]);
  let [update , setUpdate] = useState(0)
  let [totalAmount , setTotalAmount] = useState("");
  let [totalQuantity , setTotalQuantity] = useState("")
   useEffect(()=>{
     Cart = localStorage.getItem('Cart') 
    Cart = JSON.parse(Cart)
    setCart(Cart)
} , [])



  const removeItems = (id)=>{
  Cart = localStorage.getItem('Cart') 
    Cart = JSON.parse(Cart)
    Cart = Cart.filter((elemet)=> elemet.id != id)
   localStorage.setItem("Cart",JSON.stringify(Cart))
   Cart =  localStorage.getItem('Cart')
   Cart = JSON.parse(Cart)
    setCart(Cart)    
}


useMemo(()=>{
 if(Cart && Cart.length != 0){
totalAmount  = Cart.reduce((accumulator , item)=>{
    return accumulator + (Number(item.price) * Number(item.quantity))
  } , 0)
  totalAmount = Number(totalAmount)
  setTotalAmount(totalAmount)  
}else{
  setTotalAmount(0)
}
} , [Cart , update])



return <>
<div className='Main_box'>

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>
  <h1 style={{fontFamily:"cursive" , marginLeft:'20px'}}>My Cart</h1>
  {
    (Cart == null) ? <h1>Nothing to show</h1> :  
<div style={{width:'70%' , height:'auto' , backgroundColor:"white" , marginLeft:"300px"}}>
  <table className='table'>
     <tr className='tr'>

      <th className='Th'>Product</th>
      <th className='otherTh'>Quantity</th>
      <th className='otherTh'>Each Price</th>
      <th className='otherTh'>Price</th>
     </tr>
     <tbody>{console.log(Cart)}
        {
          Cart.map((element , index)=>{
          
            console.log("this is element",element)
             return <>
             <tr className='tr'>
                <td className='Th' style={{display:'flex'}}>
                   <img className='img' src={element.image} alt="" />
                  <div style={{fontSize:'20px' , marginLeft:'30px'}}><b> {element.name} </b><br/>
                  <p>{element.details}</p></div>
                </td>
                <td className='otherTh'>{element.quantity}</td>
                <td className='otherTh'>{element.price}</td>
                <td className='otherTh'>{element.price * element.quantity}</td>
               <td> 
                <button className='btns' onClick={()=>{removeItems(element.id)}}>Remove</button> 
                </td>
             </tr>

             </>  
          })
        }
        <tr>
           <td>Total:</td>
           <td></td>
           <td>{totalQuantity}</td>
           <td>{totalAmount}$</td>
        </tr>
      </tbody>
  </table>
</div>
  }
</div>
</>

}

export default Cart







