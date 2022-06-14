import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark text-white footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4  center'>
                        <div className='footer_center'>
                        <a href="" className='a_footer p-2'>Fikrlariz</a>
                        <a href="" className='a_footer p-2 '>Yordam</a>
                        <a href="" className='a_footer p-2'>FAQ</a>
                        </div>
                    </div>
                    <div className='col-4 center '>
                        <img src="./images/logo.png" alt="Logo" />
                    </div>
                    <div className='col-4'>
                        <div className='center'>
                          <div className='footer_center'>
                          <h3 className='ms-5' >Follow On</h3>
                           <a className='ms-5' href=""> <img src="./images/instagram_icon.png" alt="" /></a>
                           <a className='ms-5'  href=""> <img src="./images/Facebook_icon.png" alt="" /></a>
                          </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
