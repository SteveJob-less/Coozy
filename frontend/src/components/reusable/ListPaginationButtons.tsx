import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";

type PaginationButtonsProps = {
    currentPage:number;
    setPage: Dispatch<SetStateAction<number>>;
    productsPerPage: number;
    productCount: number;
};

const ListPaginationButtons =  ({ currentPage, setPage, productsPerPage, productCount }: PaginationButtonsProps) => {

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setPage(currentPage - 1);
        };
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(productCount / productsPerPage)) {
            setPage(currentPage + 1);
        };
    };

    return (
        <nav hidden={productsPerPage === productCount} className="flex items-center justify-center w-full gap-2 mx-auto my-3 grow grow-1 h-fit">
            <Button variant="ghost" disabled={currentPage === 1} className="h-full px-2 py-1" onClick={handlePrevPage}>
                <RxChevronLeft size="24" />
            </Button>
            <span className="bg-black/10 w-[50px] text-center rounded-lg font-bold">{currentPage}</span>
            <Button variant="ghost" disabled={currentPage >= Math.ceil(productCount / productsPerPage)} className="h-full px-2 py-1" onClick={handleNextPage}>
                <RxChevronRight size="24" />
            </Button>
        </nav>
    );
};

export default ListPaginationButtons;