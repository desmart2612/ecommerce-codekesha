import React from 'react'

function FloatingBtn() {

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button className='btn rounded-circle position-fixed z-5 d-flex align-items-center justify-content-center' onClick={handleClick} style={{ backgroundColor: "#957d65", color: '#000', bottom: '20px', right: '20px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={36} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#fff" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
        </button>
    )
}

export default FloatingBtn
