import ProductCard from "../../_reusables/ProductCard";

export type Item = { 
    itemID: number;
    imgUrl: { img_1: string; img_2: string; },
    altText: string;
    name: string;
    price: number;
}

///!!!FIX
const ProductList = () => {
    const items = [
        { 
            itemID: 1,
            imgUrl: { 
                img_1: "https://ourhome.ph/cdn/shop/products/SpecialsSeivLshapeSofa_10425142_2_d301969b-7482-487e-b4ef-5c8386bacf07_1000x.jpg?v=1679983942",
                img_2: "https://ourhome.ph/cdn/shop/products/SpecialsSeivLshapeSofa_10425142_1_0d2ed547-5dbd-446b-a822-48f748cd0368_1000x.jpg?v=1679983942" 
            }, 
            name: "Seiv Sectional Sofa", 
            altText: "seiv-sectional-sofa",
            price: 10,
        },
        { 
            itemID: 2,
            imgUrl: { 
                img_1: "https://ourhome.ph/cdn/shop/products/SpecialsSeivLshapeSofa_10425142_2_d301969b-7482-487e-b4ef-5c8386bacf07_1000x.jpg?v=1679983942",
                img_2: "https://ourhome.ph/cdn/shop/products/SpecialsSeivLshapeSofa_10425142_1_0d2ed547-5dbd-446b-a822-48f748cd0368_1000x.jpg?v=1679983942" 
            }, 
            name: "Seiv Sectional Sofa", 
            altText: "seiv-sectional-sofa",
            price: 10,
        },
        { 
            itemID: 3,
            imgUrl: { 
                img_1: "https://ourhome.ph/cdn/shop/files/MIDLAND_1_1000x.jpg?v=1710385728",
                img_2: "https://ourhome.ph/cdn/shop/files/MIDLAND_3_1000x.jpg?v=1710385728",
            }, 
            name: "Midland Sectional Sofa", 
            altText: "midland-sectional-sofa",
            price: 10,
        },
        { 
            itemID: 4,
            imgUrl: { 
                img_1: "https://ourhome.ph/cdn/shop/files/MIDLAND_1_1000x.jpg?v=1710385728",
                img_2: "https://ourhome.ph/cdn/shop/files/MIDLAND_3_1000x.jpg?v=1710385728",
            }, 
            name: "Midland Sectional Sofa", 
            altText: "midland-sectional-sofa",
            price: 10,
        },
        { 
            itemID: 5,
            imgUrl: { 
                img_1: "https://ourhome.ph/cdn/shop/products/SpecialsSeivLshapeSofa_10425142_2_d301969b-7482-487e-b4ef-5c8386bacf07_1000x.jpg?v=1679983942",
                img_2: "https://ourhome.ph/cdn/shop/products/SpecialsSeivLshapeSofa_10425142_1_0d2ed547-5dbd-446b-a822-48f748cd0368_1000x.jpg?v=1679983942" 
            }, 
            name: "Seiv Sectional Sofa", 
            altText: "seiv-sectional-sofa",
            price: 10,
        },
        { 
            itemID: 6,
            imgUrl: { 
                img_1: "https://ourhome.ph/cdn/shop/files/MIDLAND_1_1000x.jpg?v=1710385728",
                img_2: "https://ourhome.ph/cdn/shop/files/MIDLAND_3_1000x.jpg?v=1710385728",
            }, 
            name: "Midland Sectional Sofa", 
            altText: "midland-sectional-sofa",
            price: 10,
        },
        { 
            itemID: 7,
            imgUrl: { 
                img_1: "https://ourhome.ph/cdn/shop/files/MIDLAND_1_1000x.jpg?v=1710385728",
                img_2: "https://ourhome.ph/cdn/shop/files/MIDLAND_3_1000x.jpg?v=1710385728",
            }, 
            name: "Midland Sectional Sofa", 
            altText: "midland-sectional-sofa",
            price: 10,
        },
        { 
            itemID: 8,
            imgUrl: { 
                img_1: "https://ourhome.ph/cdn/shop/products/39105423_Prezoisa_1_1000x.jpg?v=1616059532", 
                img_2: "https://ourhome.ph/cdn/shop/products/39105423_Prezoisa_2_1000x.jpg?v=1616059531", 
            }, 
            name: "Salem Prezoisa Mattress", 
            altText: "salem-prezoisa-mattress",
            price: 10,
        },
        { 
            itemID: 9,
            imgUrl: {
                img_1: "https://ourhome.ph/cdn/shop/products/CLOONEYIV_10420455_945cceca-4665-470d-921a-c82f6150ca11_1000x.jpg?v=1679985799", 
                img_2: "https://ourhome.ph/cdn/shop/products/CLOONEY-II_10420455-_1_9c3abdc4-4030-43b3-996a-72e95d7e35af_1000x.jpg?v=1679985799", 
            }, 
            name: "Clooney IV Sectional Sofa", 
            altText: "clooney-IV-sectional-sofa",
            price: 10,
        },
        // { 
        //     itemID: 10,
        //     imgUrl: { 
        //         img_1: "https://ourhome.ph/cdn/shop/files/MIDLAND_1_1000x.jpg?v=1710385728",
        //         img_2: "https://ourhome.ph/cdn/shop/files/MIDLAND_3_1000x.jpg?v=1710385728",
        //     }, 
        //     name: "Midland Sectional Sofa", 
        //     altText: "midland-sectional-sofa",
        //     price: 10,
        // },
        // { 
        //     itemID: 11,
        //     imgUrl: { 
        //         img_1: "https://ourhome.ph/cdn/shop/products/SpecialsSeivLshapeSofa_10425142_2_d301969b-7482-487e-b4ef-5c8386bacf07_1000x.jpg?v=1679983942",
        //         img_2: "https://ourhome.ph/cdn/shop/products/SpecialsSeivLshapeSofa_10425142_1_0d2ed547-5dbd-446b-a822-48f748cd0368_1000x.jpg?v=1679983942" 
        //     }, 
        //     name: "Seiv Sectional Sofa", 
        //     altText: "seiv-sectional-sofa",
        //     price: 10,
        // },
        // { 
        //     itemID: 12,
        //     imgUrl: {
        //         img_1: "https://ourhome.ph/cdn/shop/products/39227680SERTA13X60X75RESEVE_3_1000x.jpg?v=1646374346", 
        //         img_2: "https://ourhome.ph/cdn/shop/products/39227680SERTA13X60X75RESEVE_4_1000x.jpg?v=1646374346",
        //     }, 
        //     name: "Serta Perfect Spine Reserve Mattress", 
        //     altText: "serta-perfect-spine-reserve-mattress",
        //     price: 10,
        // },
        // { 
        //     itemID: 13,
        //     imgUrl: { 
        //         img_1: "https://ourhome.ph/cdn/shop/files/MIDLAND_1_1000x.jpg?v=1710385728",
        //         img_2: "https://ourhome.ph/cdn/shop/files/MIDLAND_3_1000x.jpg?v=1710385728",
        //     }, 
        //     name: "Midland Sectional Sofa", 
        //     altText: "midland-sectional-sofa",
        //     price: 10,
        // },
        // { 
        //     itemID: 14,
        //     imgUrl: { 
        //         img_1: "https://ourhome.ph/cdn/shop/products/39105423_Prezoisa_1_1000x.jpg?v=1616059532", 
        //         img_2: "https://ourhome.ph/cdn/shop/products/39105423_Prezoisa_2_1000x.jpg?v=1616059531", 
        //     }, 
        //     name: "Salem Prezoisa Mattress", 
        //     altText: "salem-prezoisa-mattress",
        //     price: 10,
        // },
        // { 
        //     itemID: 15,
        //     imgUrl: {
        //         img_1: "https://ourhome.ph/cdn/shop/products/CLOONEYIV_10420455_945cceca-4665-470d-921a-c82f6150ca11_1000x.jpg?v=1679985799", 
        //         img_2: "https://ourhome.ph/cdn/shop/products/CLOONEY-II_10420455-_1_9c3abdc4-4030-43b3-996a-72e95d7e35af_1000x.jpg?v=1679985799", 
        //     }, 
        //     name: "Clooney IV Sectional Sofa", 
        //     altText: "clooney-IV-sectional-sofa",
        //     price: 10,
        // },
        // { 
        //     itemID: 16,
        //     imgUrl: { 
        //         img_1: "https://ourhome.ph/cdn/shop/products/SpecialsSeivLshapeSofa_10425142_2_d301969b-7482-487e-b4ef-5c8386bacf07_1000x.jpg?v=1679983942",
        //         img_2: "https://ourhome.ph/cdn/shop/products/SpecialsSeivLshapeSofa_10425142_1_0d2ed547-5dbd-446b-a822-48f748cd0368_1000x.jpg?v=1679983942" 
        //     }, 
        //     name: "Seiv Sectional Sofa", 
        //     altText: "seiv-sectional-sofa",
        //     price: 10,
        // },
    ]    

    return (
       <ul className="grid grid-cols-3 grid-rows-3 gap-6 p-6 pb-0 text-black product-list grow">
        {items.map((item) => 
            <li key={item.itemID}>
                <ProductCard item={item} />
            </li>
        )}
       </ul>
    );  
};

export default ProductList;