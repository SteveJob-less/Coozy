import { Request, Response } from 'express';
import { Cart } from '../../models/cart';

export const addToCart = async (req: Request, res: Response) => {
    try {
        const { productId, quantity, userId } = req.body;
        
        let cart = await Cart.findOne({ where: { userId } });
       
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding item to the cart.' });
    }
};

export default addToCart;