import React from 'react'

function ProductModal({ product, visible, close }) {
    return (
        <div className={`w-100 h-100 d-${visible ? 'block' : 'none'} position-fixed top-0`} style={{ backgroundColor: '#00000091', left: '0', zIndex: '5' }}>
            <div className={`proModal position-fixed top-50 start-50 translate-middle z-5 bg-light d-flex flex-column`} style={{ width: "60%", height: '80%' }}>
                <div className='d-flex align-items-center justify-content-between p-3 w-100 text-light' style={{ backgroundColor: "#00002eff", zIndex: '6', position: 'sticky', top: '-0.2px' }}>
                    <h5>{product.name}</h5>
                    <button className='btn btn-danger' onClick={close}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className='flex-fill d-flex flex-lg-row flex-column w-100'>
                    <div className='w-lg-50 w-100' style={{ maxHeight: '450px', overflow: 'hidden' }}>
                        <img
                            src={product.image}
                            alt=""
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                    </div>
                    <div className='w-lg-50 w-100 d-flex flex-column justify-content-between p-4'>
                        <div>
                            <h5 className='fw-bold'>{product.name}</h5>
                            <p style={{ width: '100%', height: 'fit-content', overflowWrap: 'break-word' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p className='mb-1'>Color options:</p>
                            <div className='productColors'>
                                {product.colors?.map((color) => (
                                    <span
                                        key={color.name}
                                        className="colorCircle"
                                        style={{ backgroundColor: color.hex }}
                                    ></span>
                                ))}
                            </div>
                            <p className='mt-2'>Price: <span className='fw-bold'>{product.price}</span></p>
                        </div>
                        <div className='d-flex gap-4 align-items-center justify-content-around'>
                            <button className='btn flex-fill' style={{ border: "1px solid #00002eff", color: "#00002eff" }}>Add to Cart</button>
                            <button className='btn flex-fill text-light' style={{ backgroundColor: "#00002eff" }}>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductModal
