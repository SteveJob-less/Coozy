import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const CheckoutBox = ({ checkoutItems, handleRemove }: any) => {

    return (
        <section className="h-[650px] flex-col overflow-y-hidden w-full md:w-[450px] px-5">
            <div className="flex flex-col w-full p-5 pt-3 border-4 rounded-lg shadow border-slate-300/50 bg-slate-200/90 ">
                <h2 className="text-3xl font-semibold text-center">Cart Summary</h2>
                <div className="flex flex-col w-full pb-5 my-5 rounded-lg shadow min-h-[300px] shadow-slate-500/80 text-slate-900 summary">
                    <CheckoutTable 
                        items={checkoutItems} 
                        handleRemove={handleRemove} 
                    />       
                    <Separator className="w-[95%] mx-auto my-1 rounded shadow bg-slate-700/10" />
                    <div className="flex flex-row justify-between px-2 my-2 text-lg">
                        <span className="mx-2">Subtotal :</span>
                        <span className="mx-5" title="Subtotal">0</span>
                    </div>
                    <div className="flex flex-row justify-between px-2 text-lg">
                        <span className="mx-2">Shipping :</span>
                        <span className="mx-5" title="Shipping fee">0</span>
                    </div>
                    <Separator className="w-[92%] mx-auto my-3 rounded shadow bg-slate-700" />
                    <div className="flex flex-row justify-between px-4 text-2xl">
                        <span className="font-bold">Total</span>
                        <span className="mx-5">0</span>
                    </div>
                </div>
                <Button className="bg-[#28A745] p-6 text-3xl tracking-wide shadow shadow-slate-900/300 border-2 border-transparent hover:bg-[#28A745] hover:border-white">Checkout</Button>
            </div>
        </section>
    );
};

const CheckoutTable = ({ items }: any) => {

    return (
        <Table className="w-full checkout-table">
            <TableHeader>
                <TableRow className="font-medium border border-transparent shadow border-b-slate-500/5 hover:bg-transparent">
                    <TableHead className="w-1/2 px-3 text-xl text-slate-900">Product</TableHead>
                    <TableHead className="px-3 text-xl text-slate-900">Quantity</TableHead>
                    <TableHead className="px-3 text-xl text-slate-900">Price</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
            {items ? (
                <CheckoutList items={items} />
                
            ) : (
                <CheckoutListEmpty />
            )}
            </TableBody>
        </Table>
    );
};

const CheckoutListEmpty = () => {
    return (
        <TableRow className="hover:bg-transparent">
            <TableCell className="w-full py-8 text-center text-muted-foreground" colSpan={4}>
                ( <span className="italic"> No item selected </span> )
            </TableCell>                           
        </TableRow>
    );
};

const CheckoutList = ({ items }: any) => {
    
    return (
        items.map((item:any) => 
            <TableRow key={item.id}>
                <TableCell className="flex flex-row items-center w-full gap-2 text-md text-slate-900 text-ellipsis" title={item.name}>
                    <img className="w-20 rounded-md shadow aspect-square" src={item.image} alt={item.name} />
                    <p className="truncate text-ellipsis">{item.name}</p>
                </TableCell>
                <TableCell className="text-center text-md text-slate-900/80">{item.qty}</TableCell>
                <TableCell className="text-center text-md">{item.price}</TableCell>
            </TableRow>
        )
    );
};

export default CheckoutBox;