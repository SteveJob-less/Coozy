import { Link, useRouteError } from "react-router-dom";

type RouteErrorWithStatusText = {
    statusText?: string; // Optional property for custom error message
    message: string; // Required property for error message
};

const ErrorPage = () => {
    const error = useRouteError() as RouteErrorWithStatusText;

    return (
        <div id="error-page" className="text-gray-600 flex flex-col items-center w-full h-[100dvh] gap-3 text-center page-not-found justify-center">
            <h1 className="text-6xl">Oops!</h1>
            <h2 className="text-4xl">Sorry an unexpected error has occured.</h2>
            <h3 className="text-3xl"><i>Page {error.statusText || error.message}</i></h3>
            <Link to="/" className="text-2xl italic tracking-wide text-blue-700 hover:underline focus-visible:underline hover:text-blue-500">homepage</Link>
        </div>
    );
};

export default ErrorPage;