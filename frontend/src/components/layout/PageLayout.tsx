import Header from '../reusable/Header';
import Footer from '../reusable/Footer';
import { PropsWithChildren } from 'react';
import { CartContext } from '@/context/CartContext';
import useGetCart from '@/hooks/cart/useGetCart';

type PageLayoutProps = PropsWithChildren;

const PageLayout = ({ children }: PageLayoutProps) => {
    const { data: cart } = useGetCart();

    return (
        <div className="relative">
            <CartContext.Provider value={cart} >
                <Header />
                {children}
            </CartContext.Provider>
            <Footer />
        </div>
    );
};

export default PageLayout;