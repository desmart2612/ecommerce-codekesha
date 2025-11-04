import React from 'react'

function ProductModal({ product, visible, close }) {
    return (
        <div className={`w-100 h-100 d-${visible ? 'block' : 'none'} position-fixed top-0`} style={{ backgroundColor: '#00000091', left: '0' }}>
            <div className={`position-fixed top-50 start-50 translate-middle z-5 bg-light d-flex flex-column`} style={{ width: "60%", height: '80%' }}>
                <div className='d-flex align-items-center justify-content-between p-3 w-100 text-light' style={{ backgroundColor: "#00002eff" }}>
                    <h5>{product.name}</h5>
                    <button className='btn btn-danger' onClick={close}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className='flex-fill d-flex w-100'>
                    <div className='w-50' style={{ maxHeight: '450px', overflow: 'hidden' }}>
                        <img
                            src={product.image}
                            alt=""
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                    </div>
                    <div className='w-50 d-flex flex-column justify-content-between p-4'>
                        <div>
                            <h5 className='fw-bold'>{product.name}</h5>
                            <p style={{ width: '100%', height: 'fit-content', overflowWrap: 'break-word' }}>ertryuiogoitd98e6uojhge56tyugd68969wrpuode0r8uiytytyiyt5hgtdufrse5oyfr6sfry</p>
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
