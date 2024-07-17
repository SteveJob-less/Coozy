import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Product } from "../../LandingPage/BestSeller/BestSellerProducts";

type DescriptionProps = {
    product?: Product;
};

const Description = ({ product }: DescriptionProps) => {
    
    return (
        <div className="grid items-start gap-6 p-5 h-fit md:gap-10 text-slate-300">
            <div className="grid gap-4">
                <h1 className="text-3xl font-bold lg:text-4xl">{product?.name}</h1>
                <p className="text-lg text-slate-300/60">This {product?.name} is made of a exquisite quality material and handmade product. It is aesthetically pleasing and surely perfect in your <span className="italic">{product?.category}'s</span>.</p>
                <div className="text-4xl font-bold">$99</div>
            </div>
            <form className="grid gap-4 md:gap-5">
                <div className="grid gap-2">
                    <Label htmlFor="quantity" className="text-xl">
                    Quantity
                    </Label>
                    <Select defaultValue="1">
                        <SelectTrigger className="w-24">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="">
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button className="py-6 text-xl">
                    Add to cart
                </Button>
            </form>
        </div>
    );
};

export default Description;