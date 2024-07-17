import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import useGetCart from "@/hooks/cart/useGetCart";
import { BsTrash3 } from "react-icons/bs";

const CartListContainer = ({ handleRemove, handleChangeQuantity }: any) => {
    const { data: cart } = useGetCart();

    return (
        <section className="lg:p-5 min-h-[650px] w-full md:min-w-[630px] grow max-w-[940px] items-center">
            <CartTable cart={cart} handleRemove={handleRemove} handleChangeQuantity={handleChangeQuantity} />
        </section>
    );
};

const CartTable = ({ cart, handleRemove, handleChangeQuantity }: any) => {

    return (
        <Table className="w-full cart-table min-h-[300px] p-2 bg-slate-200/80 rounded-lg shadow-md">
            <TableHeader>
                <TableRow className="font-medium border border-transparent shadow border-b-slate-500/5 hover:bg-transparent">
                    <TableHead className="w-1/2 px-3 text-xl text-slate-900">Product</TableHead>
                    <TableHead className="px-3 text-xl text-slate-900">Quantity</TableHead>
                    <TableHead className="px-3 text-xl text-slate-900">Price</TableHead>
                    <TableHead className="px-3 text-xl text-slate-900"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
            {/* Render cart list if cart is not empty, else render empty cart */}
            {cart?.length > 0 ? (
                <CartList cart={cart} handleRemove={handleRemove} handleChangeQuantity={handleChangeQuantity} />
            ) : (
                <CartEmpty />
            )}
            </TableBody>
        </Table>
    );
};

const CartEmpty = () => {
    return (
        <TableRow className="hover:bg-transparent">
            <TableCell className="w-full py-8 text-center opacity-60" colSpan={4}>
                ( <span className="px-2 italic">Cart is empty</span> )
            </TableCell>                           
        </TableRow>
    );
};

const CartList = ({ cart, handleRemove }: any) => {
    return (
        cart.map((item: any) => 
            <TableRow key={item.id}>
                <TableCell className="flex flex-row items-center w-full gap-2 text-md text-slate-900 text-ellipsis" title={item.name}>
                    <img className="w-20 rounded-md shadow aspect-square" src={item.image} alt={item.name} />
                    <p className="truncate text-ellipsis">{item.name}</p>
                </TableCell>
                <TableCell className="text-center text-md text-slate-900/80">{item.qty}</TableCell>
                <TableCell className="text-center text-md">{item.price}</TableCell>
                <TableCell className="text-center text-md">
                    <button onClick={() => handleRemove(item.id)} className="p-2 border border-transparent rounded-md hover:border-red-300 hover:bg-red-100/20">
                        <BsTrash3 size="20" />
                    </button>
                </TableCell>
            </TableRow>
        )
    );
    
};

export default CartListContainer;