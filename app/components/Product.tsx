import React from 'react'
import AddtoCart from './AddtoCart'
// import styles from './ProductCard.module.css';
const Product = () => {
  return (
    // <div className={styles.card}>Product
    //     <AddtoCart />
    // </div>
     <div className='p-5 my-6 bg-sky-300 text-white text-xl hover:bg-sky-900'>Product
        <AddtoCart />
     </div>
  )
}

export default Product