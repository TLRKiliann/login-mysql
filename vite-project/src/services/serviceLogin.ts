import { app } from '../api/axiosconfig'

type StatusProps = {
    username: string;
    password: string;
}

const getLogin: string = "/api/login";
const postStatus: string = "/api/loginDashboard";

const loginRequest = async() => {
    try {
        const req = await app.get(getLogin)
        const res = await req.data
        return res
    } catch (err:any) {
        console.log("Error response post (trbl to send data login)")
        console.log("erd", err?.res.data);
        console.log("ers", err?.res.status);
        console.log("erh", err?.res.headers);
        throw err;
    }
}

const statusRequest = async(userStatus: StatusProps) => {
    try {
        const req = await app.post(postStatus, userStatus)
        const res = await req.data
        return res
    } catch (err:any) {
        console.log("Error response post (trbl to send data login)")
        console.log("erd", err?.res.data);
        console.log("ers", err?.res.status);
        console.log("erh", err?.res.headers);
        throw err;
    }
}

const serviceLogin = {
    loginRequest,
    statusRequest
};
  
export default serviceLogin;