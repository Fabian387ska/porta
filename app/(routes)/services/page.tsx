import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />

            {/* Contenedor que envuelve el contenido principal */}
            <ContainerPage>
                <div className="grid items-center justify-center h-auto max-w-5xl gap-6 mx-auto md:grid-cols-2 pt-0">
                    <div className="max-w-[450px]">
                        <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                            Mis <span className="font-bold text-secondary"> servicios.</span>
                        </h1>
                        <p className="mb-3 text-xl text-gray-300">
                            Ofrezco servicios de desarrollo Java, creando soluciones robustas, escalables y eficientes.
                            Utilizo tecnologías modernas como Spring, Hibernate y otras herramientas avanzadas, aplicando patrones de diseño y principios SOLID para garantizar código limpio, mantenible y de alto rendimiento. Mi enfoque está en construir aplicaciones que resuelvan problemas complejos, optimizando procesos y entregando software de calidad. Siempre en búsqueda de aprender y mejorar, estoy listo para enfrentar nuevos desafíos y aportar valor real a cada proyecto.
                        </p>

                        {/* Enlace a WhatsApp */}
                        <a
                            href="https://wa.me/5534696342?text=Hola,%20me%20interesa%20contactarte!"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
                                Contacta conmigo
                            </button>
                        </a>
                    </div>

                    {/* SLIDER */}
                    <div>
                        <SliderServices />
                    </div>
                </div>
            </ContainerPage>



        </>
    );
}

export default ServicesPage;
