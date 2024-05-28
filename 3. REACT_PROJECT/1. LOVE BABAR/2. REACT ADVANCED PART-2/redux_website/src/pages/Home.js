import React from 'react'
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import Product  from '../components/Product';

function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  //  UseEffect
  useEffect(()=>{
    fetchProductData();
  },[])
  // console.log(posts)
  // Fetching the data
  async function fetchProductData(){
    setLoading(true);
    try{
      const data = await fetch(API_URL);
      const products = await data.json();
      setPosts(products);
    }
    catch{
      console.log('Error encountered');
      setPosts([]);
    }
    setLoading(false);
  }
  console.log(posts)
  return (
    (loading)? (<Spinner/>): (
      <div>
        {
        posts.map((post, index) => {
          return (
            <Product key={index} post={post}/>
          )
        })}      
      </div>
    )
  )
}

export default Home