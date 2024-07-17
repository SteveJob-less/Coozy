export type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
    sold: number;
    imgUrl: string[];
};

export const allProducts = [
    { 
        id: 1, name: "Bennette Accent", 
        category: "Living Room", 
        price: 17950, 
        sold: 1002, 
        imgUrl: [
            "https://ourhome.ph/cdn/shop/files/BENNETTE_8IMG_2023_06_08_9999_114_a81b16eb-28ab-4857-912f-a56ec061c566_1000x.jpg?v=1697080123",
            "https://ourhome.ph/cdn/shop/files/BENNETTE__IMG_2023_06_08_9999_113_1000x.jpg?v=1697080032",
        ],
    },
    { 
        id: 2, 
        name: "Brooklyn Accent", 
        category: "Living Room", 
        price: 17950, 
        sold: 1122, 
        imgUrl: [
            "https://ourhome.ph/cdn/shop/products/BrooklynAccentChair_10408785_40a56a3a-d2bc-468a-a415-3c8b32aaff2b_1000x.jpg?v=1679985836",
            "https://ourhome.ph/cdn/shop/products/Brooklyn_front_19c660de-29bd-4e19-9a45-627e48a0537c_1000x.jpg?v=1679985836",            
        ],
    },
    { 
        id: 3, 
        name: "Brooklyn Accent", 
        category: "Living Room", 
        price: 17950, 
        sold: 1122, 
        imgUrl: [
            "https://ourhome.ph/cdn/shop/products/BrooklynAccentChair_10408785_40a56a3a-d2bc-468a-a415-3c8b32aaff2b_1000x.jpg?v=1679985836",
            "https://ourhome.ph/cdn/shop/products/Brooklyn_front_19c660de-29bd-4e19-9a45-627e48a0537c_1000x.jpg?v=1679985836",
            
        ],
    },
    { 
        id: 4, 
        name: "Georgetown", 
        category: "Bedroom", 
        price: 35995, 
        sold: 1302, 
        imgUrl: [
            "https://ourhome.ph/cdn/shop/products/Georgetown13DrWrdCombiOfHang_Dr_10419010_3_588c6bbc-fd93-422c-b7d7-775b24900d16_1000x.jpg?v=1679983857",
            "https://ourhome.ph/cdn/shop/products/GeorgetownIWardrobe_10419010_1df02614-0598-46d4-9410-83837bdc00ca_1000x.jpg?v=1679983857",
        ],
    },
    { 
        id: 5, 
        name: "Fallon Center Table", 
        category: "Living Room", 
        price: 17950, 
        sold: 1982, 
        imgUrl: [
            "https://ourhome.ph/cdn/shop/products/fallon-center-table_10393811-_6_0b06c535-2310-4ec9-83cc-07c5545a3ac4_1000x.jpg?v=1679985777",
            "https://ourhome.ph/cdn/shop/products/fallon-center-table_10393811-_9_7ab1512c-ecd0-4e84-b67c-011f96492942_1000x.jpg?v=1679985777",            
        ],
    },
    { 
        id: 6, 
        name: "Siega Dining Chair", 
        category: "Kitchen", 
        price: 7995, 
        sold: 1562, 
        imgUrl: [
            "https://ourhome.ph/cdn/shop/files/OURHOME_SIEGABROWN_1_1000x.jpg?v=1707870304",
            "https://ourhome.ph/cdn/shop/files/OURHOME_SIEGABROWN_3_1000x.jpg?v=1707870304",
        ],
    },
    { 
        id: 7, 
        name: "Fallon Center Table",
        category: "Living Room",
        price: 17950, 
        sold: 1982, 
        imgUrl: [
            "https://ourhome.ph/cdn/shop/products/fallon-center-table_10393811-_6_0b06c535-2310-4ec9-83cc-07c5545a3ac4_1000x.jpg?v=1679985777",
            "https://ourhome.ph/cdn/shop/products/fallon-center-table_10393811-_9_7ab1512c-ecd0-4e84-b67c-011f96492942_1000x.jpg?v=1679985777",            
        ],
    },
    { 
        id: 8, 
        name: "Siega Dining Chair", 
        category: "Kitchen", 
        price: 7995, 
        sold: 1562, 
        imgUrl: [
            "https://ourhome.ph/cdn/shop/files/OURHOME_SIEGABROWN_1_1000x.jpg?v=1707870304",
            "https://ourhome.ph/cdn/shop/files/OURHOME_SIEGABROWN_3_1000x.jpg?v=1707870304",            
        ],
    },
    {
        id: 9, 
        name: "Georgetown", 
        category: "Bedroom", 
        price: 35995, 
        sold: 1302, 
        imgUrl: [
            "https://ourhome.ph/cdn/shop/products/GeorgetownIWardrobe_10419010_1df02614-0598-46d4-9410-83837bdc00ca_1000x.jpg?v=1679983857",
            "https://ourhome.ph/cdn/shop/products/Georgetown13DrWrdCombiOfHang_Dr_10419010_3_588c6bbc-fd93-422c-b7d7-775b24900d16_1000x.jpg?v=1679983857",
        ],
    },
    {
        id: 10, 
        name: "Fallon Center Table", 
        category: "Living Room", 
        price: 17950, 
        sold: 1982, 
        imgUrl: [
            "https://ourhome.ph/cdn/shop/products/fallon-center-table_10393811-_6_0b06c535-2310-4ec9-83cc-07c5545a3ac4_1000x.jpg?v=1679985777",
            "https://ourhome.ph/cdn/shop/products/fallon-center-table_10393811-_9_7ab1512c-ecd0-4e84-b67c-011f96492942_1000x.jpg?v=1679985777",            
        ],
    },
    { 
        id: 11, 
        name: "Siega Dining Chair", 
        category: "Kitchen", 
        price: 7995, 
        sold: 1562, 
        imgUrl: [
            "https://ourhome.ph/cdn/shop/files/OURHOME_SIEGABROWN_1_1000x.jpg?v=1707870304",
            "https://ourhome.ph/cdn/shop/files/OURHOME_SIEGABROWN_3_1000x.jpg?v=1707870304",            
        ],
    },
    { 
        id: 12, 
        name: "Fallon Center Table", 
        category: "Living Room", 
        price: 17950, 
        sold: 1982, 
        imgUrl: [
            "https://ourhome.ph/cdn/shop/products/fallon-center-table_10393811-_6_0b06c535-2310-4ec9-83cc-07c5545a3ac4_1000x.jpg?v=1679985777",
            "https://ourhome.ph/cdn/shop/products/fallon-center-table_10393811-_9_7ab1512c-ecd0-4e84-b67c-011f96492942_1000x.jpg?v=1679985777",            
        ],
    },
    { 
        id: 13, 
        name: "Siega Dining Chair", 
        category: "Kitchen", 
        price: 7995, 
        sold: 1562, 
        imgUrl: [
            "https://ourhome.ph/cdn/shop/files/OURHOME_SIEGABROWN_1_1000x.jpg?v=1707870304",
            "https://ourhome.ph/cdn/shop/files/OURHOME_SIEGABROWN_3_1000x.jpg?v=1707870304",            
        ],
    },
];

const fetchAllProducts = async () => {
    // Simulate a loading delay of x seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    return allProducts;
};

export default fetchAllProducts;