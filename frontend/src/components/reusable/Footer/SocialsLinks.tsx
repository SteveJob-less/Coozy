import { Link } from "react-router-dom";
import { socials } from "./socials";


const SocialsLinks = () => {

    return (
        <ul className="flex flex-wrap justify-start my-5 space-x-5 md:justify-end md:my-2">
        {socials.map((social) => 
            <li key={social.name} className={`${social.color} bg-slate-400 rounded-full p-1 hover:bg-white`}>
                <Link to={social.path} title={social.name}>
                    <social.icon className="w-8 h-8" />
                </Link>
            </li>
        )}
        </ul>
    );
};

export default SocialsLinks;