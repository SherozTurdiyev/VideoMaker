import React, { useState,useEffect } from 'react';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import  Axios  from 'axios';
const API_KEY = "d930db297cae2067fd66dfd4ac071731";
const Base_Image_Url="https://image.tmdb.org/t/p/w500"


// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import NavigationIcon from '@mui/icons-material/Navigation';

const Video = () => {
    const[data,setdata]=useState([])

    useEffect(() => {
        Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
            .then((res) => {
               
                setdata(res.data.results)
                console.log(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    // console.log(" Data=>",data);
    return (
        <div className='bg-black text-light '>
            <div className='container'>
                <div className='row'>
                <div className='col-8 mt-4'>
                    <img className='w-100' src="https://i.ytimg.com/vi/RbE3jl69Nhc/maxresdefault.jpg" alt="" />
                    <div className='row'>
                        <div className='col-4'>
                            <h3>Bigle</h3>
                            <h5>2018.12.12</h5>
                            <p>Lorem ipsum dolor sit amet consectetur </p>
                        </div>
                        <div className='col-4 '>
                            
                        </div>
                        <div>
                            <h3>Descrition</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia veritatis veniam consectetur hic adipisci ipsam fugit labore maxime incidunt, blanditiis necessitatibus? Iusto hic vel est. Voluptatibus provident autem sit, quo voluptates tempore voluptate ullam consequuntur quae. Dignissimos minima dolores sequi!</p>
                        </div>
                    </div>

                </div>
                <div className='col-4 mt-4'>
                   <h2 className=' col-10'>Siz uchun Lentalar</h2>
                      
                   <div className='row scroll'>
                        {
                            data.map(item=>{
                                return(
                                    
                                        <div className='col-6'>
                                            <img className='w-100' src={Base_Image_Url+item.poster_path}  alt={item.original_title} width="100%"/>
                                            <h5>{item.original_title}</h5>
                                        </div>
                            
                                )
                            })
                        }
                   </div>
                </div>
                </div>
                <h2 className='mt-4'>Shaxsiy Lentalar</h2>
                <div className='mt-5 scroll_x'>
                   
                    {
                            data.map(item=>{
                                return(                                
                                        <div   className='col-3 ' >
                                            <img className='w-100' src={Base_Image_Url+item.poster_path}  alt={item.original_title} width="100%"/>                         
                                        </div>             
                                )
                            })
                        }
                </div>
                
            </div>
        </div>
    );
}

export default Video;
