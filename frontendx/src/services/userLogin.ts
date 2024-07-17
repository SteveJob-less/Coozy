import axios from "axios";

type UserData = {
    email: string;
    password: string;
}

const userLogin = async(data: UserData) => {
    try {
        console.log("/services/userLogin.ts", data);
        // const result = await axios.post();
    } catch(error: any) {
        console.error("user login Error:", error.message);
    }
}

export default userLogin;