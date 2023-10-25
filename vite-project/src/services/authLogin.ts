import { app } from '../api/axiosconfig'

type StatusProps = {
    username: string;
    password: string;
}

const getLogin: string = "/api/login";
const postStatus: string = "/api/loginDashboard";

const loginRequest = () => {
    try {
        const req = app.get(getLogin)
        return req.then((res) => res.data)
    } catch (err:any) {
        console.log("Error response post (trbl to send data login)")
        console.log("erd", err?.res.data);
        console.log("ers", err?.res.status);
        console.log("erh", err?.res.headers);
        throw err;
    }
}

const statusRequest = (userStatus: StatusProps) => {
    try {
        const req = app.post(postStatus, userStatus)
        return req.then((res) => res.data)
    } catch (err:any) {
        console.log("Error response post (trbl to send data login)")
        console.log("erd", err?.res.data);
        console.log("ers", err?.res.status);
        console.log("erh", err?.res.headers);
        throw err;
    }
}

const functionToCall = {
    loginRequest,
    statusRequest
};
  
export default functionToCall;