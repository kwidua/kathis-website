import { useState } from "react"
import {useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
    email: yup
        .string()
        .required(),
    name: yup
        .string()
})
export default function ContactForm() {
    const [email, setEmail] = useState();

    type ContactFormData = {
        email: string;
        name: string;
    };

    const {register, handleSubmit, formState: {errors}} = useForm<ContactFormData>({
        mode: "onSubmit",
        resolver: yupResolver(schema)
    });

    function onSubmit(data: any) {
        console.log(data)
    }

    return (
        <>
         <section className="flex flex-col gap-4 items-center my-gradient">
            <h1 className="m-4">Kontakt</h1>
                <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email", {required: "email required"})}
                        placeholder="Your mail"
                        className="px-4 py-2 rounded-lg border border-gray-600 w-full max-w-md bg-cyan-90"
                        />
                        <p className="">{errors.email?.message}</p>

                        <input {...register("name", {required: "name required"})}
                        placeholder="Your name"
                        className="px-4 py-2 rounded-lg border border-gray-600 w-full max-w-md bg-cyan-90"
                        />
                        <p className="">{errors.name?.message}</p>
                        <button className="px-4 py-2 rounded-2xl bg-cyan-800 border-sky-200" type="submit">Submit</button>
                </form>
         </section>
        </>
    )
}