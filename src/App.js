import React from "react";
import { useEffect, useState } from "react";
import { getProducts } from "./connection/conn";
import Product from "./components/Product";




function App() {
  const [product,setProduct]=useState([])

  useEffect(()=>{
    getProducts(setProduct)
  },[])
  return (
    <div className="container">

        <h1>PRODUCTS</h1>
     
        <div className="products">
          {product.map((item)=>
          <Product
          key={item._id} 
          productName={item.productName}
          price={item.price}
          rating={item.rating}
          discount={item.discount}
          availability={item.availability} 
          />)}
    
        </div>

      </div>
      
  
  );
}

export default App;
