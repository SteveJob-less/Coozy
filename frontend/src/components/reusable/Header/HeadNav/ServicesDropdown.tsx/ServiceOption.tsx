import { Link } from "react-router-dom";

const ServiceOption = ({ text, path }: { text: string, path: string }) => {

    return (
        <Link to={path} className="mx-auto"><span>{text}</span></Link>
    );
};

export default ServiceOption;