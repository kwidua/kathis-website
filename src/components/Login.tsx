import {useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
    email: yup
        .string()
        .required(),
    firstname: yup
        .string()
        .required(),
    lastname: yup
        .string()
        .required(),
    password: yup
        .string()
        .required()
})

export default function Login()
{
    var isLoggedIn = false;

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schema)
    });

    function onLogin(data: any) {
        console.log(data)
        isLoggedIn = true
    }

    function onLogout() {
        isLoggedIn = false
    }

    return (
        <>
            <section className='flex flex-col gap-2  items-center'>
            <div className='bg-cyan-800 p-10'>
                {!isLoggedIn ? (
                <>
                <h2 className="m-4">Login</h2>
                <form className="flex flex-col gap-2" onSubmit={handleSubmit(onLogin)}>
                        <input {...register("firstname", {required: "firstname required"})}
                        placeholder="Your first name"
                        className="px-4 py-2 rounded-lg border border-white-600 w-full max-w-md bg-sky-200 text-cyan-900"
                        />
                        <p className="">{errors.firstname?.message}</p>

                        <input {...register("lastname", {required: "lastname required"})}
                        placeholder="Your last name"
                        className="px-4 py-2 rounded-lg border border-white-600 w-full max-w-md bg-sky-200 text-cyan-900"
                        />
                        <p className="">{errors.lastname?.message}</p>

                        <input {...register("email", {required: "email required"})}
                        placeholder="Your mail"
                        className="px-4 py-2 rounded-lg border border-white-600 w-full max-w-md bg-sky-200 text-cyan-900"
                        />
                        <p className="">{errors.email?.message}</p>


                        <input {...register("password", {required: "password required"})}
                        placeholder="Your password"
                        className="px-4 py-2 rounded-lg border border-white-600 w-full max-w-md bg-sky-200 text-cyan-900"
                        />
                        <p className="">{errors.password?.message}</p>

                        <button className="px-4 py-2 rounded-2xl bg-cyan-800 border-sky-200" type="submit">Submit</button>
                </form>
                </>
               ) : (<>
               <h2 className="m-4">Logout</h2>
                <form className="flex flex-col gap-2" onSubmit={handleSubmit(onLogout)}>
                        <button className="px-4 py-2 rounded-2xl bg-cyan-800 border-sky-200" type="submit">Logout</button>

                </form>
               </>)}
            </div>
            </section>
        </>
    )
}