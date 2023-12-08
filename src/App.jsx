import React from 'react';
import Navbar from './Blog-website/Navbar';
import Courosel from './Blog-website/Courosel';
import Card from './Blog-website/Card';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Courosel/>
    

      <div className="container">
  <div className="row">
    <div className="col-md-6">
    <div className="ml-3">
    <Card img="/public/images/card2.jpg"  title="React Developer" p = "Some quick example text to build on the card title and make up the bulk of the card's content."   />
    </div>
    </div>
    <div className="col-md-6">
    <div className="ml-3">
    <Card img="/public/images/card2.jpg"  title="React Developer" p = "Some quick example text to build on the card title and make up the bulk of the card's content." />
    </div>
    </div>
    <div className="col-md-6">
    <div className="ml-3">
    <Card img="/public/images/card2.jpg"  title="React Developer" p = "Some quick example text to build on the card title and make up the bulk of the card's content." />
    </div>
    </div>
    <div className="col-md-6">
    <div className="ml-3">
    <Card img="/public/images/card2.jpg"  title="React Developer" p = "Some quick example text to build on the card title and make up the bulk of the card's content." />
    </div>
    </div>
  </div>
</div>

      
      
      
      
          </div>
  );
};

export default App;