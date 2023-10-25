import { useForm } from "react-hook-form"
import '../App.scss'

type FormData = {
    username: string;
    email: string;
    password: string;
};

export default function LoginTester() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            username: '',
            email: '',
            password: ''
    }});

    const onSubmit = handleSubmit(data => console.log(data));

    return (
        <>
            <form className="form--login" onSubmit={onSubmit}>

                <label>Username</label>
                <input type="text" placeholder="username" 
                    autoComplete="off" className="input--custom"
                    {...register("username", { required: true })} />
                <legend>{errors.username && "username is required"}</legend>

                <label>Email</label>
                <input type="email" placeholder="email" className="input--custom"
                    {...register("email", { required: true })} />
                <legend>{errors.email && "email is required"}</legend>

                <label>Password</label>
                <input type="password" placeholder="password" className="input--custom"
                    {...register("password", { required: true })} />
                <legend>{errors.password && "password is required"}</legend>
                
                <button type="submit">Enter</button>
            </form>
        </>
    )
}
