import { useLayoutEffect, useRef } from 'react'

function Navbar() {

    const activeMarkRef = useRef(null);
    const tabRefs = {
        home: useRef(null),
        shop: useRef(null),
        products: useRef(null),
        pages: useRef(null),
        blog: useRef(null),
        elements: useRef(null),
    };

    const navListRef = useRef(null);

    const moveMarker = (tabKey) => {
        
        const tab = tabRefs[tabKey].current;
        const marker = activeMarkRef.current;        
        console.log('parent:', navListRef.current);
        if (tab && marker) {                        
            const leftOffset = tab.offsetLeft + tab.offsetWidth / 2 - 45;
            marker.style.left = `${leftOffset}px`;

            Object.values(tabRefs).forEach(ref => {
                if (ref.current) ref.current.classList.remove('active-tab');
            });
            tab.classList.add('active-tab');
        }
    };

    useLayoutEffect(() => {
        moveMarker('shop'); // default active tab
    }, []);

    return (
        <div className='navbar navbar-expand-lg'>
            <div className="container-fluid">
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <h5>KeshaMart</h5>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <h5>KeshaMart</h5> */}
                <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
                    <div ref={activeMarkRef} className='z-1 bg-dark position-absolute rounded-pill' id='active-mark'></div>
                    <ul ref={navListRef} className='navbar-nav me-auto mb-2 mb-lg-0 navLinks z-2'>                        
                        {['home', 'shop', 'products', 'pages', 'blog', 'elements'].map(key => (
                            <li
                                key={key}
                                ref={tabRefs[key]}
                                id={key}
                                className={`ms-4 ${key === 'shop' ? 'active-tab' : ''}`}
                                onClick={() => moveMarker(key)}
                            >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </li>
                        ))}
                    </ul>

                    <div className='navIcons'>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                <path fill="currentColor" d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4">
                                </path>
                            </svg>
                        </button>
                        <div className='iconWithSpan'>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M20.16 5A6.29 6.29 0 0 0 12 4.36a6.27 6.27 0 0 0-8.16 9.48l6.21 6.22a2.78 2.78 0 0 0 3.9 0l6.21-6.22a6.27 6.27 0 0 0 0-8.84m-1.41 7.46l-6.21 6.21a.76.76 0 0 1-1.08 0l-6.21-6.24a4.29 4.29 0 0 1 0-6a4.27 4.27 0 0 1 6 0a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 0a4.29 4.29 0 0 1 .08 6Z"></path>
                                </svg>
                            </button>
                            <span className='spanHover bg-danger'>3</span>
                        </div>
                        <div className='iconWithSpan'>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </button>
                            <span className='spanHover bg-warning text-dark'>1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar
