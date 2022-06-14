import React from 'react';
// import Axios from 'axios'
import Axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

const Activators = () => {
  // const [actovators , setActivators] = useState([])

  
  useEffect(() => {
    Axios.get("https://api.themoviedb.org/3/movie/popular?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US&page=1")
        .then((res)=>{
            console.log(res.data.results);
        })
        .catch((err)=>{
            console.log(err);
        })
  }, []);
  return (
    <div>
      
    </div>
  );
}

export default Activators;
