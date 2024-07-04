import React from 'react'


const Product = ({productName,price,rating,discount,availability}) => {
  return (
    <div className='todo'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxcXrGtBGlWfSUK_01e7ePZaT-FkkYf_JBSA&s" alt="lap"/>
        <div className='text'><span style={{color:"dodgerblue"}}>Name </span>: {productName}</div>
        <div className='text'><span style={{color:"dodgerblue"}}>Price :</span> {price}</div>
        <div className='text'><span style={{color:"dodgerblue"}}>Rating : </span>{rating}</div>
        <div className='text'><span style={{color:"dodgerblue"}}>Discount :</span> {discount}</div>
        <div className='text'><span style={{color:"dodgerblue"}}>Availability :</span> {availability}</div>
        <div style={{marginBottom:"20px"}}></div>
    
    </div>
  )
}

export default Product
 