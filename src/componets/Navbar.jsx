import React from 'react'
import Nav_Json from '../JSON_files/Nav.json'
export default function Navbar() {
  return (
    <nav className='bg-dark text-secondary '>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-2">
                    <img src="./images/logo.png" alt="Logo" />
                </div>
                <div className="col-6">
                    <ul className='d-flex flex-row align-items-center list-unstyled m-0'>
                        {
                            Nav_Json.map((vl , ky)=>{
                                return(
                                    <li className='d-flex flex-row align-items-center p-3' key={ky}>
                                        <img src={vl.img} alt="logo"/>
                                        <p className='m-0 p-1'>{vl.txt}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="col-4 align-items-center">
                    <img src="./images/icons/search.png" alt="search_icons" className='mx-3' />
                    <input type="text" placeholder='Search' />
                </div>
            </div>
        </div>
    </nav>
  )
}
