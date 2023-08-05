import React from 'react';
import './services.css'; // Import your CSS file for styling
import LocalImage from './image/serveiceimg.webp';
function Service() {
  return (
    <>
     <h2 className='header'> <span style={{color:"green" ,fontSize:"45px"}}>|</span> Food Lab Food Safety Service</h2>
     <div className="responsive-page" >
     
      <div className="image-half" >
        <img src={LocalImage} alt="Image" />
      </div>
      < div className="text-half" >
        <h5>
          Aperiam quia sapiente vel consequatur consequatur omnis sed autem quae.
          Ipsa et minus consequatur vero et doloribus. Ex error illum consequatur amet ea occaecati odit. Quia similique
           dolorum officiis distinctio magnam ut facilis. Et dolore est inventore ea et molestiae earum.
        </h5>
      </div>
    </div>
    {/* <h4 className='header'>Ensuring  safety of food from</h4>
    <h3 className='header' >From to Fork</h3> */}
    </>

  );
}

export default Service;
