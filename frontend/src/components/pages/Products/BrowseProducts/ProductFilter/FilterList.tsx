import React from 'react'; // imported react to avoid the weird issue
import { useProductFilterContext } from "../../../../../context/ProductFilterContext";
import { filterList } from "./filterList";

const FilterList = () => {
    const { selected, handleOptionClick } = useProductFilterContext();

    return (
        <ul className="hidden w-full px-2 font-sans tracking-wide product-filter-list md:block">
        {filterList.map((option) => 
            <li key={option.id} className="flex items-center gap-3 p-1 text-xl text-slate-100">
                <input 
                    type="checkbox" 
                    className="size-4"
                    id={option.name} 
                    checked={selected === option.name}
                    onChange={() => handleOptionClick(option.name)}
                />
                <label htmlFor={option.name} className="cursor-pointer">{option.name}</label>
            </li>
        )}
        </ul>
    );
};

export default FilterList;