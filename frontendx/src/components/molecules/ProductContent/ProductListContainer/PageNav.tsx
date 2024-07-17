type PageNavProps = { pageNumber: number };

const PageNav = ({ pageNumber }: PageNavProps) => {

    return (
        <nav className="flex flex-row items-center justify-center text-black w-[300px] h-[30px] text-center">
        {pageNumber > 0 ?
            <>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="mx-2 h-5 px-2 cursor-pointer hover:bg-[#0000002e] rounded"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                <span className="text-xl h-3 w-[40%] flex items-center mx-0 justify-center border-gray-700 border-x">{pageNumber}</span>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="mx-2 h-5 px-2 cursor-pointer hover:bg-[#0000002e] rounded"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </>
            : null
        }
        </nav>
    );
};

export default PageNav;