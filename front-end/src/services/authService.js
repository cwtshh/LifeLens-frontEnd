import { api, requestConfig } from '../utils/config';

// registrar um usuario
const register = async(user) => {
    const config = requestConfig("POST", user);

    try {
        const res = await fetch(api + "/users/register", config)
            .then((res) => res.json())
            .catch((err) => err);

        if(res) {
            localStorage.setItem("user", JSON.stringify(res));
        }

        return res;
    } catch (error) {
        console.log(error);
    }
};

const authService = {
    register,
};

export default authService;