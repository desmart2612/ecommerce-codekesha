import React from 'react'
import MyDropdown from './MyDropdown.jsx'

function FilterTab() {
    const filters = [
        { name: "Category", 
            options: [
                "Clothes",
                "Electronics",
                "Furniture",
                "Toys",
                "Others"
            ] 
        }, 
        { name: "Color", 
            options: [
                "Red",
                "Blue",
                "Green",
                "Yellow",
                "Black",
                "White"
            ] 
        }, 
        { name: "Size", 
            options: [
                "S",
                "M",
                "L",
                "XL",
                "XXL"
            ] 
        }, 
        { name: "Brand", 
            options: [
                "Brand A",
                "Brand B",
                "Brand C",
                "Brand D"
            ] 
        }, 
        { name: "Price", 
            options: [
                "$0 - $25",
                "$25 - $50",
                "$50 - $100",
                "$100 - $200",
                "$200+"
            ] 
        }
    ]
    return (
        <div className='flex-wrap' style={{ display: "flex", alignItems: "center", gap: "5px", margin: "20px 0px 0px", justifyContent: "start", padding: "0 3rem" }}>
            <p className='text-nowrap fw-bold m-0'>Filter by:</p>
            {filters.map((filter) => (
                <MyDropdown key={filter.name} label={filter.name} options={filter.options} />
            ))}
        </div>
    )
}

export default FilterTab
