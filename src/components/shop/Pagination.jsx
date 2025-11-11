import { useRef, useEffect } from 'react';

function Pagination({ currentPage, setCurrentPage, totalPages }) {
  const pageMarkerRef = useRef(null);
  const pageRefs = Array.from({ length: totalPages }, () => useRef(null));

  const movePageMarker = (index) => {
    const page = pageRefs[index].current;
    const marker = pageMarkerRef.current;
    if (!page || !marker) return;

    setCurrentPage(index);

    const leftOffset = page.offsetLeft + page.offsetWidth / 2 - 15;
    marker.style.left = `${leftOffset}px`;
  };

  useEffect(() => {
    const timeout = setTimeout(() => movePageMarker(currentPage), 100);
    return () => clearTimeout(timeout);
  }, [currentPage]);

  useEffect(() => {
    const handleResize = () => movePageMarker(currentPage);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage]);

  return (
    <div className='w-100 d-flex gap-4 pb-4 align-items-center justify-content-center position-relative'>
      <div
        ref={pageMarkerRef}
        className='pageMarker bg-dark rounded-circle position-absolute'
        style={{ width: '30px', height: '30px', transition: 'top 0.3s ease, left 0.3s ease', top: '-5px', zIndex: '-1' }}
      ></div>

      {pageRefs.map((ref, index) => (
        <span
          key={index}
          ref={ref}
          className={`${currentPage === index ? 'active-page' : ''}`}
          onClick={() => movePageMarker(index)}
          style={{ cursor: 'pointer' }}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}


export default Pagination;