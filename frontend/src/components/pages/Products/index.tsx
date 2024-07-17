import PageLayout from "@/components/layout/PageLayout";
import bg from "../../../assets/images/bg-header.jpg";
import { Outlet } from "react-router-dom";

const Products = () => {

    return (
        <PageLayout>
            <main className="browse-products font-[gilroy] min-h-[100dvh] bg-cover pt-24 md:pt-10 bg-center w-full" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat' }}>
                <Outlet />
            </main>
        </PageLayout>
    );
};

export default Products;