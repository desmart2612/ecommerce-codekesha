import React from 'react';
import modelImage from '/images/Home_hero.png';

function HeroSection() {
  return (
    <div className="w-100 d-flex gap-3 flex-lg-row flex-column align-items-center justify-content-around px-4 py-3">
      {/* Left Section */}
      <div
        className="d-flex flex-column justify-content-center align-items-center hero-text animate__animated animate__fadeInLeft"
        style={{ backgroundColor: '#f8f9fa', height: 'fit-content' }}
      >
        <h1 className="fw-bold mb-3 text-wrap w-100 text-lg-start text-center" style={{ letterSpacing: '-2px', fontFamily: 'Manrope, sans-serif', fontSize: '60px', color: '#000' }}>Style Up Your Closet!</h1>
        <p className="text-muted mb-4" style={{fontSize: '1.2rem', fontFamily: 'Arial, sans-serif', color: '#555', textAlign: 'start'}}>
          Discover the latest trends and timeless pieces to elevate your wardrobe. Quality fashion delivered to your door.
        </p>
        <div className="d-flex gap-3 align-items-center justify-content-center w-100">
          <button
            className="btn text-light rounded-3 border-0 px-4 py-2"
            style={{ backgroundColor: '#957D65', minWidth: '84px', maxWidth: '480px' }}
          >
            Shop Now
          </button>
          <button
            className="btn text-dark rounded-3 border-0 px-4 py-2"
            style={{ backgroundColor: '#e7f1f3', minWidth: '84px', maxWidth: '480px' }}
          >
            Men
          </button>
          <button
            className="btn text-dark rounded-3 border-0 px-4 py-2"
            style={{ backgroundColor: '#e7f1f3', minWidth: '84px', maxWidth: '480px' }}
          >
            Women
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="m-3 rounded-4 hero-image animate__animated animate__fadeInRight"
        style={{          
          overflow: 'hidden',
          height: '80vh',
          backgroundImage: `url(${modelImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* <img
          src={modelImage}
          alt="Fashion Model"
          style={{ height: '90%', width: '90%', objectFit: 'fill', aspectRatio: '1/1' }}
          className='rounded-3'
        /> */}
      </div>
    </div>
  );
}

export default HeroSection;
