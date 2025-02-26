import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 gap-8">
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto md:mx-0">
                    <Image
                        src="/img4.png"
                        priority
                        width="400"
                        height="400"
                        alt="Avatar"
                        className="object-cover rounded-full"
                    />
                </div>

                <div className="flex flex-col justify-center max-w-md mx-auto md:mx-0">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Si puedes imaginarlo, <br />
                        <TypeAnimation
                            sequence={[
                                'puedes programarlo',
                                1000,
                                'puedes desarrollarlo',
                                1000,
                                'puedes optimizarlo',
                                1000,
                                'puedes escalarlo',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-4 text-lg md:text-xl md:mx-0 md:mb-8 leading-relaxed text-center md:text-left">
                        Soy <span className="text-secondary font-semibold">Jesús Castillo</span>, un <span className="text-secondary font-semibold">desarrollador Java Jr</span> apasionado por crear soluciones tecnológicas eficientes con tecnologías como <span className="text-secondary font-semibold">Java, Spring Boot, Hibernate</span>, aplicando patrones de diseño y principios <span className="text-secondary font-semibold">SOLID</span> para mantener un código limpio y escalable.
                    </p>


                    <div className="flex items-center justify-center gap-4 md:justify-start md:gap-6">
                        <Link href="/portfolio" passHref legacyBehavior>
                            <a className="px-4 py-2 transition-all border-2 text-md rounded-xl hover:shadow-xl hover:shadow-white/50">
                                Ver proyectos
                            </a>
                        </Link>

                        <a
                            href="/Jesus.pdf"
                            download
                            className="px-4 py-2 transition-all border-2 text-md rounded-xl hover:shadow-xl hover:shadow-white/50"
                            aria-label="Descargar CV de Jesús Castillo"
                        >
                            Descargar CV
                        </a>

                        <Link href="/testimonials" passHref legacyBehavior>
                            <a className="px-4 py-2 transition-all border-2 cursor-pointer text-md text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                                Contacta conmigo
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;