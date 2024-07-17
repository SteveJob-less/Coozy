import axios from "axios";

type UserData = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirm: string;
}

const userSignup = async(data: UserData) => {
    try {
        console.log("/services/userSignup.ts", data);
        // const result = await axios.post();
    } catch(error: any) {
        console.error("user signup Error:", error.message);
    }
}

export default userSignup;