import { useState } from 'react'

function MyDropdown({label, options}) {

    const [clicked, setClicked] = useState(false);
    const [selected, setSelected] = useState(label || '');

    const handleClicked = () => {
        setClicked(!clicked);
    };

    const handleSelect = (value) => {
        setSelected(value);
    }

    return (
        <div className='filter d-flex flex-column p-2 position-relative'>
            <div className='btn bg-light shadow-sm rounded-2 p-2 d-flex justify-content-between align-items-center' onClick={handleClicked}>
                <span>{selected || 'Category'}</span>
                {!clicked ?
                    <svg className='ms-2 size-6 filter-expand' xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    :
                    <svg className='ms-2 size-6 filter-collapse' xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                }
            </div>
            <div className={`${clicked ? 'd-flex' : 'd-none'} d-flex flex-column align-items-start bg-light rounded-2 shadow-sm mt-5 z-3 position-absolute`} style={{ width: '90%' }}>
                {options.map((option) => (
                    <button
                        key={option}
                        className="filter-btn rounded-0 btn btn-white text-start border-0 shadow-none w-100"
                        onClick={() => handleSelect(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default MyDropdown
