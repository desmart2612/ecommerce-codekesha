import { useEffect, useRef, useState } from 'react'
import 'animate.css';

function PromoSection() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className='w-100 d-flex flex-column flex-md-row align-items-center justify-content-center gap-3' style={{ padding: "20px 15%" }}>
      <div className={`promoCard d-flex flex-column gap-3 rounded-4 justify-content-end p-4 position-relative overflow-hidden ${isVisible ? 'animate__animated animate__rubberBand' : ''}`}
        data-alt="Abstract gradient overlay on fashion image"
        style={{ 
          flex: 1, 
          backgroundImage: 'linear-gradient(to bottom, rgba(60, 40, 30, 0.7), rgba(255, 220, 200, 0.3)), url("https://i.pinimg.com/736x/17/44/58/174458320f70c88d11f38a4ab39e30db.jpg")',
          height: '50vh', 
          width: '40%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <p className="text-white fs-4 fw-bold mb-0">Mid-Season Sale: Up to 40% Off</p>
        <button
          className="btn btn-light border-0 rounded-3 py-2 px-4 fw-bold"
          style={{ maxWidth: 'fit-content', minWidth: '120px' }}>
          <span className="text-dark">Shop Sale</span>
        </button>
      </div>
      <div className={`promoCard d-flex flex-column gap-3 rounded-4 justify-content-end p-4 position-relative overflow-hidden ${isVisible ? 'animate__animated animate__rubberBand' : ''}`}
        data-alt="Abstract gradient overlay on fashion image"
        style={{ 
          flex: 1,
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 50, 50, 0.7), rgba(255, 255, 150, 0.3)), url("https://i.pinimg.com/736x/49/53/2f/49532f906f4ebb37bc3dc8a2bca21a4f.jpg")',
          height: '50vh', 
          width: '40%' 
          }}
        >
        <p className="text-white fs-4 fw-bold mb-0">New Arrivals Have Landed</p>
        <button
          className="btn btn-light border-0 rounded-3 px-4 py-2 fw-bold"
          style={{ maxWidth: 'fit-content', minWidth: '120px' }}>
          <span className="text-dark">Discover More</span>
        </button>
      </div>
    </div>
  )
}

export default PromoSection
