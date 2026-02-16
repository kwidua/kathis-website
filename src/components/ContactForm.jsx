import { useState } from "react"


export default function ContactForm() {
    const [email, setEmail] = useState();

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email)
    }

    return (
        <>
         <section className="text-center my-gradient">
            <h2 className="m-4">Kontakt</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 content-center">
                        <div class="sm:col-span-4">
                        <label for="email" class="block text-sm/6 font-medium text-white">Email</label>
                        <div class="mt-2">
                            <div class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                            <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} name="email" placeholder="janesmith" class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
                            </div>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
         </section>
        </>
    )
}