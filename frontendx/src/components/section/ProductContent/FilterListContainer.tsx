import { useState } from "react";
import FilterList from "../../molecules/ProductContent/FilterListContainer/FilterList";

const FilterListContainer = () => {
    const [selectAll, setSelectAll] = useState(false);
    const collections = ["Popular", "New", "Sale"];
    const categories = ["Cabinet", "Chair", "Desk", "Drawer", "Table", ];
    const [filter, setFilter] = useState<string[]>([]); 

    const handleChangeFilter = (newFilter: string) => {
        // Check if all filter is checked, else set selectAll = false
        setSelectAll(filter.length <= 8 ? false : true); 
        setFilter(
            (prevFilter) => prevFilter.includes(newFilter)
            ? prevFilter.filter((item) => item !== newFilter)
            : [...prevFilter, newFilter]
        );
    };
    const handleSelectAll = () => {
        // Toggle the "Select All" checkbox,
        setSelectAll((prevState) => !prevState); 

        // Set the filter = []: if selectAll !checked, else set filter = [...collections, ...categories]
        const checked = selectAll? [] : [...collections, ...categories];
        setFilter((prevState) => prevState = checked);
    };

    return (
        <section className="hidden text-2xl lg:flex flex-col min-h-full text-white w-[20%] bg-[#0000006d] justify-start px-5 py-3">
            <FilterList name="Collection" handleChangeFilter={handleChangeFilter} filter={filter} options={collections} />
            <FilterList name="Category" handleChangeFilter={handleChangeFilter} filter={filter} options={categories} />
            <button className="flex gap-2 hover:text-[#ffd900] py-5 px-3 tracking-wide">
                <input onChange={() => handleSelectAll()} type="checkbox" checked={selectAll} name="check-all" id="check-all" style={{ accentColor:  "#ffd900" }} />
                <label className="mx-0" htmlFor="check-all">Select all</label>
            </button>
        </section>
    );
};

export default FilterListContainer;