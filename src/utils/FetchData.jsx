// import React from "react";


export const exerciseOptions ={
        method: 'GET',
        // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
          'X-RapidAPI-Key': '2c31f38063msh159b063ea26a224p1ab4b4jsn67216dd4e150',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6ab21637acmshfcbefc64df00107p1e0851jsnb4afdaf0e20f',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};      

export const fetchData=async(url,options)=>{
        const response =await fetch(url,options);
        const data = await response.json();
    
        return data;
    }      