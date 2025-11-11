import React from 'react'

function StorySection() {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center text-center my-4' style={{ padding: "20px 6%", backgroundColor: '#f8f9fa' }}>
            <h2 className='fw-bold fs-4'>Our Story</h2>
            <p className='fs-6 mb-0' style={{ maxWidth: '750px' }}>
                KeshaMart was born from a
                passion for timeless style and accessible quality. We believe that fashion is a form of self-expression,
                and our mission is to provide you with curated collections that inspire confidence and celebrate
                individuality, all while committing to sustainable and ethical practices.
            </p>
        </div>
    )
}

export default StorySection
