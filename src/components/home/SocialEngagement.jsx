import React from 'react'

function SocialEngagement() {
    return (
        <div className='w-100 d-flex align-items-center justify-content-center'>
            <div className='w-50 text-center d-flex flex-column gap-3 pt-3 pb-5'>
                <h3 className='fw-bold'>Join the Community</h3>
                <p>
                    Follow us on Instagram for style inspiration
                    and subscribe to our newsletter for exclusive deals and early access to new collections.
                </p>
                <div className='d-flex flex-column flex-md-row gap-2'>
                    <input className='form-control bg-secondary-subtle' type="email" name="subscriber_email" id="" placeholder='Enter your email' />
                    <button className='btn w-25 text-light fw-bold fs-5' style={{ backgroundColor: "#957D65" }}>Subscribe</button> 
                </div>
            </div>
        </div>
    )
}

export default SocialEngagement
