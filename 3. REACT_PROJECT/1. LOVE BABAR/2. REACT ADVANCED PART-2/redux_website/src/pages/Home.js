import React from 'react'
import { useEffect } from 'react';
function Home() {
  const API_URL = "https://fakestoreapi.com/products";

  useEffect(()=>{
    fetchProductData();
  },[])
  async function fetchProductData(){
    const data = await fetch(API_URL);
    const products = await data.json();
    console.log(products);
  }
  return (
    <div>
      this is home page with cards
    </div>
  )
}

export default Home