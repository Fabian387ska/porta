"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import TransitionPage from '@/components/transition-page';
import ContainerPage from "@/components/container-page";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Enviando...");

        const serviceID = "service_xx5p88z";
        const templateID = "template_g2b0vcw";
        const userID = "zeD_H3JFzQGKVf0-m";

        const templateParams = {
            to_name: "Jesús Castillo",
            from_name: formData.name,
            message: formData.message,
            reply_to: formData.email,
        };

        emailjs
            .send(serviceID, templateID, templateParams, userID)
            .then(() => {
                setStatus("Mensaje enviado con éxito!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => {
                setStatus("Error al enviar el mensaje. Intenta nuevamente.");
            });
    };

    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <div className="flex items-center justify-center max-h-screen py-16">
                    <div className="max-w-[450px] w-full text-center">
                        <h1 className="text-2xl leading-tight md:text-4xl md:mb-5">
                            Contacta <span className="font-bold text-secondary">conmigo</span>
                        </h1>
                        <p className="mb-3 text-xl text-gray-300">
                            Envíame un mensaje y me pondré en contacto contigo lo antes posible.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4 mx-auto w-full max-w-md">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Tu nombre"
                                className="px-3 py-2 border-2 border-gray-300 rounded-xl w-full text-black"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Tu correo electrónico"
                                className="px-3 py-2 border-2 border-gray-300 rounded-xl w-full text-black"
                                required
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tu mensaje"
                                className="px-3 py-2 border-2 border-gray-300 rounded-xl w-full text-black"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 transition-all border-2 cursor-pointer text-md w-full rounded-xl hover:shadow-xl hover:shadow-white/50"
                            >
                                Enviar mensaje
                            </button>
                        </form>
                        {status && <p className="mt-4 text-center">{status}</p>}
                    </div>
                </div>
            </ContainerPage>


        </>
    );
};

export default ContactPage;
