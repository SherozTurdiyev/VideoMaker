import React, {useEffect , useState} from 'react'
import axios from 'axios'
export default function Activators() {
  const [actovators , setActivators] = useState([])

useEffect(()=>{
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=66abca2db221b711948f5d3310f1e6e3&language=en-US&page=1")
    .then((res)=>{
        console.log(res.data.results);
    })
    .catch((err)=>{
        console.log(err);
    })
})
  return (
    <div className='activators'>
        <div className="container">
          
        </div>
    </div>
  )
}
