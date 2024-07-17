type FilterListProps = {
    name: string;
    handleChangeFilter: (filter: string) => void;
    filter: string[]; 
    options: string[], 
    font?: string 
};

const FilterList = ({ name, filter, handleChangeFilter, options }: FilterListProps) => {

    return (
        <ul className="py-3 border-b-2 border-gray-300">
            <li className="mb-1 font-semibold tracking-widest">{name}</li>
        {options.map((option) => 
            <li 
                key={option} 
                className="px-4 flex gap-2 tracking-wide hover:text-[#ffd900] py-1"
            >
                <input 
                    id={option} 
                    name={option} 
                    value={option}
                    type="checkbox"
                    checked={filter.includes(option)}
                    style={{ accentColor:  "#ffd900" }}
                    onChange={() =>handleChangeFilter(option)}  
                />
                <label className="mx-0" htmlFor={option}> {option}s</label>
            </li>
        )}
        </ul>
    );
};

export default FilterList;