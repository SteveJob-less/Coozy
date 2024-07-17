import { useState } from "react";
import CartList from "./CartList";
import DeleteIcon from "./DeleteIcon";

const CartProductContainer = () => {
    const columnNames = ["Product", "Unit Price", "Quantity", "Total", "Action"];
    const cartItems = [
        {itemID: 1, name: "product1", qty: 1, price: 1},
        {itemID: 2, name: "product2", qty: 1, price: 2},
        {itemID: 3, name: "product3", qty: 1, price: 3},
        {itemID: 4, name: "product4", qty: 1, price: 4},
        {itemID: 5, name: "product5", qty: 1, price: 5},
    ];
    const [selectAll, setSelectAll] = useState(false);
    const [checkedItem, setCheckedItem] = useState<number[]>([]);
    
    const handleCheckItem = (id: number) => {
        setSelectAll(selectAll && checkedItem.includes(id)? false : selectAll);
        setCheckedItem(
            (prevIDs) => prevIDs.includes(id)
            ? prevIDs.filter((product) => product !== id)
            : [...prevIDs, id]
        );
    }

    const handleSelectAll = () => {
        setSelectAll((prevState) => prevState = !prevState);

        const selectedItems = selectAll? [] : cartItems.map((item) => item.itemID);
        setCheckedItem(selectedItems);
    }
    const handleClearCart = () => {
        console.log("CLEAR CART ACTION")
    }

    return (
        <div className="w-[70%] flex flex-col">
            <div className="grid grid-cols-5 py-1 mx-0 text-xl font-semibold cart-tablehead">
            {columnNames.map((col, index) => 
                <span className={`py-1 w-full text-center ${index + 1 !== columnNames.length ? "border-r" :""}`} key={col}>{col}</span>
            )}
            </div>
            <ul className="max-h-[652px] overflow-y-auto border rounded grow">
            {cartItems.map((product) => 
                <CartList 
                    key={product.itemID} 
                    item={product}
                    isChecked={checkedItem.includes(product.itemID)}
                    handleOnChange={handleCheckItem}
                />
            )}
            </ul>
            <div className="text-end bg-[#00000033] w-full h-12 rounded-b">
                <span className="inline-block w-1/5 mx-0 text-start">Subtotal: </span>
                <span className="inline-block w-1/5 text-start">
                    <div className="flex flex-row items-center justify-start mx-0 select-all-items">
                        <input 
                            className="mx-2 my-4" 
                            style={{ accentColor:  "#ffd900" }} 
                            type="checkbox" 
                            name="select-all" 
                            id="select-all" 
                            checked={selectAll}
                            onChange={() => handleSelectAll()}
                        />
                        <label className="mx-0 text-xl h-fit" htmlFor="select-all">Select all<span className="text-gray-300">({cartItems.length})</span></label>
                    {selectAll &&
                        <div className="p-1 hover:border hover:bg-[#ffffff14] cursor-pointer rounded">
                            <DeleteIcon handleAction={handleClearCart} />
                        </div>
                    }
                    </div>
                </span>
            </div>
        </div>
    );
};

export default CartProductContainer;