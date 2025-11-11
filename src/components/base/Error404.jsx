import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';

function Error404() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="d-flex flex-column align-items-center justify-content-center text-center px-4 py-5"
      style={{
        minHeight: '80vh',
        background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
        color: '#fff',
      }}
    >
      <div
        className={`animate__animated ${isVisible ? 'animate__bounceInDown' : ''}`}
      >
        <h1 className="fw-bold display-1 mb-3">404</h1>
        <h2 className="fw-bold mb-3">Page Not Found</h2>
        <p className="lead mb-4">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
      </div>

      <div
        className={`animate__animated ${isVisible ? 'animate__fadeInUp animate__delay-1s' : ''}`}
      >
        <a
          href="/"
          className="btn btn-light fw-bold rounded-pill px-4 py-2 shadow-sm"
        >
          Back to Home
        </a>
      </div>

      <div
        className={`mt-5 animate__animated ${isVisible ? 'animate__fadeIn animate__delay-2s' : ''}`}
      >
        <span className="badge bg-dark text-light px-3 py-2 rounded-pill">
          Error Code: 404
        </span>
      </div>
    </section>
  );
}

export default Error404;