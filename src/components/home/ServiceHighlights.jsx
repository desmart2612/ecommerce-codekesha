import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';

function ServiceHighlights() {
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

    const services = [
        {
            icon: 'local_shipping',
            title: 'Free Shipping',
            description: 'Enjoy free shipping on all orders over $50.',
            delay: '0s',
        },
        {
            icon: 'verified',
            title: 'Quality Guarantee',
            description: 'We stand by our products with a 30-day quality guarantee.',
            delay: '0.3s',
        },
        {
            icon: 'support_agent',
            title: '24/7 Support',
            description: 'Our support team is here to help you around the clock.',
            delay: '0.6s',
        },
    ];

    return (
        <div className="w-100 d-flex gap-4 justify-content-center align-items-center pt-5 pb-4 my-4" style={{ borderTop: '1px solid rgba(13, 25, 27, 0.1)', borderBottom: '1px solid rgba(13, 25, 27, 0.1)' }} ref={sectionRef}>
            {services.map((service, index) => (
                <div key={index} className='d-flex justify-content-center' style={{width: "20%"}}>
                    <div
                        className={`d-flex flex-column align-items-center text-center gap-2 ${isVisible ? 'animate__animated animate__fadeInUp' : ''
                            }`}
                        style={{ animationDelay: service.delay }}
                    >
                        <span
                            className="material-symbols-outlined"
                            style={{ color: '#957D65' }} // accent color
                        >
                            {service.icon === 'local_shipping' ?
                                <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M6 20q-1.25 0-2.125-.875T3 17H1V6q0-.825.588-1.412T3 4h14v4h3l3 4v5h-2q0 1.25-.875 2.125T18 20t-2.125-.875T15 17H9q0 1.25-.875 2.125T6 20m0-2q.425 0 .713-.288T7 17t-.288-.712T6 16t-.712.288T5 17t.288.713T6 18m-3-3h.8q.425-.45.975-.725T6 14t1.225.275T8.2 15H15V6H3zm15 3q.425 0 .713-.288T19 17t-.288-.712T18 16t-.712.288T17 17t.288.713T18 18m-1-5h4.25L19 10h-2zm-8-2.5"></path>
                                </svg>
                                : service.icon === 'verified' ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24">
                                        <path fill="currentColor" d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45zm.85-2.55l2.55-1.1l2.6 1.1l1.4-2.4l2.75-.65l-.25-2.8l1.85-2.1l-1.85-2.15l.25-2.8l-2.75-.6l-1.45-2.4L12 5.15l-2.6-1.1L8 6.45l-2.75.6l.25 2.8L3.65 12l1.85 2.1l-.25 2.85l2.75.6zm1.5-4.4L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12z"></path>
                                    </svg>
                                    : service.icon === 'support_agent' ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M11.77 20v-1h6.615q.25 0 .432-.154q.183-.154.183-.404v-6.888q0-2.81-2.066-4.693Q14.867 4.977 12 4.977T7.066 6.861Q5 8.744 5 11.554v5.677h-.5q-.613 0-1.057-.415Q3 16.402 3 15.79v-1.885q0-.448.291-.795q.292-.348.709-.565l.017-1.229q.027-1.565.68-2.9t1.744-2.323t2.524-1.54T12 4t3.033.552t2.513 1.538t1.735 2.32t.702 2.9L20 12.513q.398.187.699.503q.301.315.301.757v2.166q0 .442-.301.757t-.699.502v1.244q0 .652-.472 1.105T18.385 20zm-2.385-6.461q-.31 0-.54-.211q-.23-.21-.23-.52t.23-.53t.54-.22t.539.22t.23.53t-.23.52t-.54.21m5.232 0q-.31 0-.54-.21t-.23-.52t.23-.53t.54-.22t.539.22t.23.53t-.23.52t-.54.21M6.718 11.95q-.136-2.246 1.447-3.829q1.582-1.583 3.886-1.583q1.936 0 3.432 1.163t1.826 3.055q-1.987-.025-3.688-1.014t-2.61-2.75q-.362 1.731-1.505 3.034q-1.144 1.303-2.788 1.924"></path>
                                        </svg>
                                        : null
                            }
                        </span>
                        <h5 className="fw-bold">{service.title}</h5>
                        <p className="text-muted small">{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ServiceHighlights;
