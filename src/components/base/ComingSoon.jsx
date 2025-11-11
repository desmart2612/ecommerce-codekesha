import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';

function ComingSoon() {
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
        minHeight: '70vh',
        background: 'linear-gradient(135deg, #f9d976, #f39f86)',
        color: '#fff',
      }}
    >
      <div
        className={`animate__animated ${isVisible ? 'animate__fadeInDown' : ''}`}
      >
        <h1 className="fw-bold display-4 mb-3">🚀 Coming Soon</h1>
        <p className="lead mb-4">
          We’re crafting something exciting and stylish for you. Stay tuned for
          the big reveal!
        </p>
      </div>

      <div
        className={`animate__animated ${isVisible ? 'animate__fadeInUp animate__delay-1s' : ''}`}
      >
        <form className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
          <input
            type="email"
            className="form-control rounded-pill px-3 py-2"
            placeholder="Enter your email"
            style={{ maxWidth: '300px' }}
          />
          <button className="text-nowrap btn btn-dark fw-bold rounded-pill px-4 py-2">
            Notify Me
          </button>
        </form>
      </div>

      <div
        className={`mt-5 animate__animated ${isVisible ? 'animate__fadeIn animate__delay-2s' : ''}`}
      >
        <span className="badge bg-dark text-light px-3 py-2 rounded-pill">
          Launching Soon ✨
        </span>
      </div>
    </section>
  );
}

export default ComingSoon;