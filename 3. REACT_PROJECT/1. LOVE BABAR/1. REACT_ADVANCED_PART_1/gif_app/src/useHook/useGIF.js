import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const Tag_url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

//* tag is the prop 
function useGIF(tag) {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');

    

    //* Making the ApI in the useEffect:
    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData() {
        setLoading(true); 

        //* if the function receives the tag as prop then Tag_url will be used otherwise Random_url will be used
        const response = await axios.get(tag? `$(url)&tag=${tag}`: url);
        // console.log(response?.data?.data);
        setGif(response?.data?.data?.images?.downsized?.url);
        setLoading(false)
    }

    //* Returning -> fetchData function, gif and loading. No use of the brackets while sending the function
    return {gif, loading, fetchData}
}

export default useGIF
