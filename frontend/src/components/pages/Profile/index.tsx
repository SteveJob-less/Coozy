import PageLayout from "@/components/layout/PageLayout";
import { Outlet } from "react-router-dom";

const Products = () => {

    return (
        <PageLayout>
            <main className="profile-page font-[gilroy] min-h-[100dvh] pt-24 md:pt-10 w-full">
                <Outlet />
            </main>
        </PageLayout>
    );
};

export default Products;