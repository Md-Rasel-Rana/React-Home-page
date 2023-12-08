
import { useState } from 'react';
const Courosel = () => {
    const [longTitle] = useState({
        title1: "Lorem ipsum dolor sit amet1.",
        title2: "Lorem ipsum dolor sit amet.2",
        title3: "Lorem ipsum dolor sit amet.3",
        paragraph1:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, voluptas. Similique deserunt numquam repudiandae provident sapiente dolorum, dolor accusamus possimus.",
        paragraph2:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, voluptas. Similique deserunt numquam repudiandae provident sapiente dolorum, dolor accusamus possimus.",
        paragraph3:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, voluptas. Similique deserunt numquam repudiandae provident sapiente dolorum, dolor accusamus possimus.",
        MiddleTitile1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod",
        MiddleTitile2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod",
        MiddleTitile3:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod",
      });
    return (
        <div> 
<div id="demo" className="carousel slide mt-2" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active container">
        <div className='row'>
            <div className='col-md-6'>
                <img src="/public/images/img1.jpg" alt="Los Angeles" className="d-block w-100"/>
            </div>
            <div className='col-md-6'>
                <h5 className='longTitle'>{longTitle.title1}</h5>
                <h4>{longTitle.MiddleTitile1} </h4>
                <p>{longTitle.paragraph1}</p>
            </div>
        </div>
        
    </div>
    <div className="carousel-item container">
    <div className='row'>
            <div className='col-md-6'>
            <img src="/public/images/img2.jpg" alt="Chicago" className="d-block w-100"/>
            </div>
            <div className='col-md-6'>
                <h5>{longTitle.title2}</h5>
                <h4>{longTitle.MiddleTitile2}</h4>
                <p>{longTitle.paragraph2}</p>
            </div>
        </div>
     
    </div>
    <div className="carousel-item container">
    <div className='row'>
            <div className='col-md-6'>
            <img src="/public/images/img3.jpg" alt="Chicago" className="d-block w-100"/>
            </div>
            <div className='col-md-6'>
                <h5>{longTitle.title3}</h5>
                <h4>{longTitle.title3} </h4>
                <p>{longTitle.paragraph3}</p>
            </div>
        </div>
     
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
  </div>
  </div>
    );
};

export default Courosel;
