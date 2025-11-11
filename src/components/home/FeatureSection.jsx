import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';

function FeatureSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // trigger only once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="d-flex flex-column gap-3 w-100"
      style={{ padding: '20px 6%' }}
    >
      <h2 className="fw-bold fs-2">Featured Categories</h2>
      <div className="d-flex overflow-x-auto featured-categories">
        <div className="d-flex align-items-stretch p-2 gap-4">
          {[
            {
              title: 'Dresses',
              subtitle: 'Chic & elegant',
              img: 'https://i.pinimg.com/1200x/81/54/76/815476b611ba01eb0856b48892a4b080.jpg',
              delay: '0s',
            },
            {
              title: 'Outerwear',
              subtitle: 'Stay warm in style',
              img: 'https://i.pinimg.com/1200x/0f/a0/10/0fa0100564e4e088cf59e86a85a7aa4a.jpg',
              delay: '0.5s',
            },
            {
              title: 'Accessories',
              subtitle: 'The final touch',
              img: 'https://i.pinimg.com/736x/01/9a/cb/019acb1de9eae5d91ceb15476ade0c0e.jpg',
              delay: '1s',
            },
            {
              title: 'Shoes',
              subtitle: 'Step up your game.',
              img: 'https://i.pinimg.com/1200x/76/31/10/76311006362a4fc95dcee9d310511733.jpg',
              delay: '1.5s',
            },
            {
              title: 'New Arrivals',
              subtitle: 'Freshly dropped',
              img: 'https://i.pinimg.com/1200x/c7/09/ac/c709acb1309dfcccc6aa0d67a90a316c.jpg',
              delay: '2s',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`d-flex h-100 flex-column rounded-3 category-card ${
                isVisible ? 'animate__animated animate__fadeInRight' : ''
              }`}
              style={{
                animationDelay: item.delay,
                visibility: isVisible ? 'visible' : 'hidden',
              }}
            >
              <div
                className="w-100 rounded-3 d-flex flex-column category-img"
                style={{ backgroundImage: `url("${item.img}")` }}
              ></div>
              <div className="mt-2 px-0">
                <p className="fw-bold text-dark mb-0" style={{ fontSize: '1.1rem' }}>
                  {item.title}
                </p>
                <p className="text-dark">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
