import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserAuthPage from "./components/pages/UserAuthPage";
import HomePage from "./components/pages/HomePage";
import ErrorPage from "./components/pages/ErrorPage";
import ProductsPage from "./components/pages/ProductsPage";
import UserCartPage from "./components/pages/UserCartPage";
import ProductDetails from "./components/layouts/ProductDetails";
import "./App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,   
        errorElement: <ErrorPage />,
    }, 
    {
        path: "/user-auth",
        element: <UserAuthPage />,    
    },
    {
        path: "/product",
        element: <ProductsPage />,
        children: [
            {
                path: "/product/:itemID",
                element: <ProductDetails />,
            }
        ]
    },
    {
        path: "/cart",
        element: <UserCartPage />
    }
]);

function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
