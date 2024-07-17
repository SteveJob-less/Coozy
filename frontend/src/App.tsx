import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import UserAuth from "./components/pages/UserAuth";
import Products from "./components/pages/Products";
import Cart from "./components/pages/Cart";
import ProductDetails from "./components/pages/Products/ProductDetails";
import BrowseProducts from "./components/pages/Products/BrowseProducts";

const App = () => {
    const queryClient = new QueryClient();
    
    const router = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />,
        },
        {
            path: "/user-auth",
            element: <UserAuth />,
        },
        {
            path: "/products",
            element: <Products />,
            children: [
                {
                    path: "",
                    element:<BrowseProducts />,
                },
                {
                    path: ":id",
                    element:<ProductDetails />,
                },
            ],
        },
        {
            path: "/cart",
            element: <Cart />,
        }
    ]);
    
    return (
        <QueryClientProvider client={queryClient}> 
            <RouterProvider router={router} />
        </QueryClientProvider>
    );    
};

export default App;
