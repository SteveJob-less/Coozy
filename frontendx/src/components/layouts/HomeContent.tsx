import CoverPhoto from "../section/HomeContent/CoverPhoto";
import DiscountedProducts from "../section/HomeContent/DiscountedProducts";

const HomeContent =() => {

    return (
        <main className="home-content relative lg:h-[91dvh] flex flex-col items-center justify-between">
            <CoverPhoto />
            <DiscountedProducts />
        </main>
    );
};

export default HomeContent;