import { Item } from "./CartProductContainer";
import DeleteIcon from "./DeleteIcon";

type CartListProps = { 
    item: Item;
    isChecked: boolean;
    handleOnChange: (id: number) => void;
};

const CartList = ({ item, isChecked, handleOnChange }: CartListProps) => {

    const handleDeleteCartItem = (id: number) => {
        console.log(`DELETE PRODUCT WITH THE ID:${id} FROM THIS CART`);
    }

    return (
        <li key={item.itemID} className="grid grid-cols-5 py-3 text-xl border-b group hover:bg-[#ffffff2c]">
            <div className="flex flex-row items-center p-2 mx-0 cart-checkbox">
                <input 
                    className="m-2" 
                    checked={isChecked} 
                    style={{ accentColor:  "#ffd900" }} 
                    type="checkbox" 
                    name={item.name} 
                    id={`${item.itemID}`} 
                    onChange={() => handleOnChange(item.itemID)}
                />
                <label className="mx-0 text-2xl h-fit" htmlFor={`${item.itemID}`}>{item.name}</label>
            </div>
            <div className="flex items-center">{item.price}</div>
            <div className="flex items-center">{item.qty}</div>
            <div className="flex items-center font-semibold">{item.qty * item.price}</div>
        {isChecked &&
            <div className="flex items-center cursor-pointer hover:border-opacity-10 hover:border hover:bg-[#ffffff14] p-2 px-3 rounded">
                 <DeleteIcon handleAction={() => handleDeleteCartItem(item.itemID)} />
            </div>
        }
        </li>
    );
};

export default CartList;