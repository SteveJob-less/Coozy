import { Outlet, useParams } from "react-router-dom";
import ProductContent from "../layouts/ProductContent";
import Footer from "../layouts/_reusables/Footer";
import Header from "../layouts/_reusables/Header";
import ProductDetailsNotFound from "../layouts/ProductDetailsNotFound";

const ProductsPage = () => {
    const { itemID } = useParams();

    return (
        <div>
            <Header />
            {!itemID && <ProductContent />}
            {itemID && Number.isFinite(Number(itemID)) ? <Outlet /> : <ProductDetailsNotFound itemID={itemID} />}
            <Footer />
        </div>
    );
};

export default ProductsPage;
