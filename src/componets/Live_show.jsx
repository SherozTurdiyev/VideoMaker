import React from 'react';
import { useState,useEffect } from 'react';
import  Axios  from 'axios';
const API_KEY = "d930db297cae2067fd66dfd4ac071731";
const Base_Image_Url = "https://image.tmdb.org/t/p/w500"

const LiveShow = () => {
    const [data, setdata] = useState([])
    // const[trending,settrending]=useState([])
    useEffect(() => {
        Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
            .then((res) => {
               
                setdata(res.data.results)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    console.log(data);
    return (
        <div className='bg-dark text-white '>
            <div className="container">
                <h2  className='pt-5 pb-4'>Live Show</h2>
                <div className=' scroll_x'>
                   {
                    data.map((item , index)=>{
                        return(
                         
                            <div className='live_show col-2 p-3'>
                                <div className='col-4'>
                                 <img className='popular2 w-100' src={Base_Image_Url+item.poster_path} alt="" />
                                </div>
                                <div className='col-8'>
                                 <h5>{item.title}</h5>
                                </div>

                            </div>
                     
                        )
                        
                    })
                   }
                </div>
                <h3 className='mt-5 mb-3'>Most Popular</h3>
                <div className=' scroll_x '>
                   {
                    data.map((item , index)=>{
                        return(
                         
                            <div className='col-2 p-3'>
                             
                                 <img className='popular2 w-100' src={Base_Image_Url+item.poster_path} alt="" />
                                
                                 <h5>{item.title}</h5>
                             

                            </div>
                     
                        )
                        
                    })
                   }
                </div>


                <h3 className='mt-5 mb-3'>Movies For you</h3>
                <div className=' scroll_x '>
                   {
                    data.map((item , index)=>{
                        return(
                         
                            <div className='col-2 p-3'>
                             
                                 <img className='popular2 w-100' src={Base_Image_Url+item.poster_path} alt="" />
                                
                                 <h5>{item.title}</h5>
                             

                            </div>
                     
                        )
                        
                    })
                   }
                </div>




                <h3 className='mt-5 mb-3'>Latest bangle music</h3>
                <div className=' scroll_x '>
                   {
                    data.map((item , index)=>{
                        return(
                         
                            <div className='col-2 p-3'>
                             
                                 <img className='popular2 w-100' src={Base_Image_Url+item.poster_path} alt="" />
                                
                                 <h5>{item.title}</h5>
                             

                            </div>
                     
                        )
                        
                    })
                   }
                </div>

                
            </div>
        </div>
    );
}

export default LiveShow;
