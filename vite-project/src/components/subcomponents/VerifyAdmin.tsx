import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie'

type ResponseProps = {
    username: string | undefined;
}

function VerifyAdmin(props: ResponseProps) {

    const Navigate = useNavigate()
    const cookies = new Cookies();

    useEffect(() => {
        const timer = setTimeout(() => {
            localStorage.setItem("admin-info",
            JSON.stringify([props.username]))
            cookies.set("admin-cookie", props.username,
              { path: '/', sameSite: "strict", secure: true });
            
            Navigate('/succeed')
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    //console.log(cookies.get("admin-cookie"));

    return (
        <>
            <p>Ok, you are the admin {props.username}!</p>
        </>
    )
}

export default VerifyAdmin