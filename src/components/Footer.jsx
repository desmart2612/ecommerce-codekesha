import React from 'react'

function Footer() {
    return (
        <div className='bg-dark footer'>
            <div className='d-flex flex-wrap gap-2 p-4'>
                <div className='d-flex flex-column justify-content-center align-items-start' style={{width: '35%'}}>
                    <h4 className='text-light'>Receive an Exclusive <span className='text-danger'>20%</span> discount code when you sign up.</h4>
                    <form className=''>
                        <div className='border border-bottom-1 border-top-0 border-start-0 border-end-0 border-secondary d-flex gap-3 py-2 px-4 flex-wrap'>
                            <input type='email' className=' px-2 rounded-2 border-0 bg-dark text-light flex-grow-0 flex-shrink-1' placeholder='Enter your Email' />
                            <button className='btn border-0 bg-dark text-light'>Subscribe</button>
                        </div>
                    </form>
                </div>
                <div className='border border-start-1 border-top-0 border-end-0 border-bottom-0 p-4 border-secondary flex-fill'>
                    <h5 className="text-light mb-2">Company</h5>
                    <ul className="ps-0 mb-0" style={{listStyleType: 'none'}}>
                        <li><a className="text-light text-decoration-none" href="#">About Us</a></li>
                        <li><a className="text-light text-decoration-none" href="#">Blog</a></li>
                        <li><a className="text-light text-decoration-none" href="#">Careers</a></li>
                        <li><a className="text-light text-decoration-none" href="#">Locations</a></li>
                    </ul>
                </div>
                <div className='border border-start-1 border-top-0 border-end-0 border-bottom-0 p-4 border-secondary flex-fill'>
                    <h5 className="text-light mb-2">Customer Care</h5>
                    <ul className="ps-0 mb-0" style={{listStyleType: 'none'}}>
                        <li><a className="text-light text-decoration-none" href="#">Size Guide</a></li>
                        <li><a className="text-light text-decoration-none" href="#">Help & FAQs</a></li>
                        <li><a className="text-light text-decoration-none" href="#">Return My Order</a></li>
                        <li><a className="text-light text-decoration-none" href="#">Refer a Friend</a></li>
                    </ul>
                </div>
                <div className='border border-start-1 border-top-0 border-end-0 border-bottom-0 p-4 border-secondary flex-fill'>
                    <h5 className="text-light mb-2">Terms And Policies</h5>
                    <ul className="ps-0 mb-0" style={{listStyleType: 'none'}}>
                        <li><a className="text-light text-decoration-none" href="#">Duties & Taxes</a></li>
                        <li><a className="text-light text-decoration-none" href="#">Shipping Info</a></li>
                        <li><a className="text-light text-decoration-none" href="#">Privacy Policy</a></li>
                        <li><a className="text-light text-decoration-none" href="#">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className='border border-start-1 border-top-0 border-end-0 border-bottom-0 p-4 border-secondary flex-fill'>
                    <h5 className="text-light mb-2">Follow Us</h5>
                    <ul className="ps-0 mb-0" style={{listStyleType: 'none'}}>
                        <li><a className="text-light text-decoration-none" href="#">Instagram</a></li>
                        <li><a className="text-light text-decoration-none" href="#">Facebook</a></li>
                        <li><a className="text-light text-decoration-none" href="#">Pinterest</a></li>
                        <li><a className="text-light text-decoration-none" href="#">Tiktok</a></li>
                    </ul>
                </div>                
            </div>
            <div className='border border-bottom-0 border-top-1 border-start-0 border-end-0 border-secondary p-4 d-flex justify-content-between'>
                <div className='d-flex gap-3'>
                    <h5 className='text-light align-items-end'>KeshaMart</h5>
                    <small className='text-light mt-1' style={{fontSize: '13px'}}>&copy; 2025 October.All rights reserved.</small>
                </div>
                <div>
                    <img className='me-2' src="images/visa_logo.png" alt="" style={{width: '30px', height: '20px'}}/>
                    <img className='me-2' src="images/masterCard_logo.png" alt="" style={{width: '40px', height: '30px'}} />
                    <img className='me-2' src="images/stripe_logo.png" alt="" style={{width: '30px', height: '20px'}} />
                    <img className='me-2' src="images/paypal_logo.png" alt="" style={{width: '40px', height: '30px'}} />
                </div>
            </div>
        </div>
    )
}

export default Footer
