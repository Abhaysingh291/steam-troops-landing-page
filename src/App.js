import React from 'react';
import Navbar from './Navbar';
import Slides  from './Slide';
import Service from './Services.js';
import Footer from  './Footer';
const App = () => {
  return (
    <div>
      <Navbar />
      <Slides/>
      <Service/>
      <Footer/>
    </div>
  );
};

export default App;
