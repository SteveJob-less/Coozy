type item = {
    id: number
    name: string;
    price: number;
    imgUrl: string[];
    qty: number;
};

export type Cart = {
    userId: number
    items: item[];
};

const db_cart = [
    {
        userId: 1,
        items: [
            {
            id: 1,
            name: 'Modern Sofa',
            price: 1200,
            imgUrl: ['https://example.com/sofa.jpg'],
            qty: 2,
            },
        ],
    },
    {
        userId: 2,
        items: [
            {
                id: 1,
                name: 'Modern Sofa',
                price: 1200,
                imgUrl: ['https://example.com/sofa.jpg'],
                qty: 1,
            },
            {
                id: 2,
                name: 'Oak Table',
                price: 500,
                imgUrl: ['https://example.com/table.jpg'],
                qty: 1,
            },
        ],
    }
];

const fetchCart = async (userId = 1) => {
    // Simulate a loading delay of x seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    return db_cart.find(cart => cart.userId === userId? cart : null);

    // if (userCart) {
    //     return userCart;
    // } else {
    //     return {} as Cart; // Return an empty cart if userId is not found
    // }
};

export default fetchCart;