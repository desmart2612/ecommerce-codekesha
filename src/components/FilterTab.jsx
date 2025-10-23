import React from 'react'
import Dropdown from './Dropdown.jsx'

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
        <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "20px 0px 0px", justifyContent: "space-evenly", padding: "0 3rem" }}>
            <p className='text-nowrap m-0'>Filter by:</p>
            {filters.map((filter) => (
                <Dropdown key={filter.name} first={filter.name} options={[filter]} />
            ))}
        </div>
    )
}

export default FilterTab
