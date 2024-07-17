import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LuAlignJustify } from "react-icons/lu";
import { Link } from "react-router-dom";
import { navLinks } from "./UserDropdown/navLinks";

// Hamburger icon: Component for mobile menu navigation
const MobileNavMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="md:hidden" size="icon" variant="ghost">
                    <LuAlignJustify className="size-full text-slate-900" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <SheetList />
            </SheetContent>
        </Sheet>
    );
};

const SheetList = () => {
    const sheetLinks = [...navLinks, { name: "Profile", path: "/profile" }];

    return (
        <ul className="flex flex-col" role="list">
        {sheetLinks.map((link, index) => 
            <>
                <li className="py-1" key={link.name}>
                    <Button className="px-0 font-semibold text-md" variant="link">
                        <Link to={link.path}>
                            {link.name}
                        </Link>
                    </Button>
                </li>
                {sheetLinks.length - 1 > index ? <Separator className="w-4/6 border border-slate-100/5" /> : null}
            </>
        )}
        </ul>
    );
};
export default MobileNavMenu;