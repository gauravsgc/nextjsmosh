'use client';
import React from 'react'

const AddtoCart = () => {
  return (
    <div>
        <button  className="btn btn-primary" onClick={()=>{console.log('clicked');
        alert("clicked")
        }}>click</button>
    </div>
  )
}

export default AddtoCart