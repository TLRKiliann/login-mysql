import { app } from '../api/axiosconfig'

const postLogin: string = "/api/login";

const loginRequest = () => {
    try {
        const req = app.get(postLogin)
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
};
  
export default functionToCall;