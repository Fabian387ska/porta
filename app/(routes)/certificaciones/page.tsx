// /pages/CertificationsSkillsPage.tsx
import Certification from "@/components/Certification";
import Skills from "@/components/Skills";
import TransitionPage from "@/components/transition-page"; // Si ya tienes esta página de transición
import ContainerPage from "@/components/container-page"; // Importamos ContainerPage

const CertificationsSkillsPage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl mb-8">
                    Certificaciones y Habilidades
                </h1>

                {/* Sección de Certificaciones */}
                <div className="mb-12">
                    <h2 className="text-xl md:text-2xl font-semibold mb-6">Certificaciones</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <Certification 
                            title="Universidad Java - Cero a Experto" 
                            issuer="Udemy" 
                            date="Febrero 2025" 
                            link="https://www.udemy.com/certificate/UC-37e9cc68-c142-4acd-9304-a024d76e316d/"
                        />
                        <Certification 
                            title="Diplomado en Desarrollo de Sistemas Empresariales con Tecnologias Java" 
                            issuer="UNAM" 
                            date="Abril 2025" 
                            link="#!"
                        />
                        {/* Agrega más certificaciones aquí */}
                    </div>
                </div>

                {/* Sección de Habilidades */}
                <div>
                    <h2 className="text-xl md:text-2xl font-semibold mb-6">Habilidades</h2>
                    <Skills 
                        skills={[
                            "Java", 
                            "Spring Boot", 
                            "Hibernate", 
                            "MySQL", 
                            "Patrones de diseño", 
                            "SOLID", 
                            "Git", 
                            "MariaDB"
                        ]}
                    />
                </div>
            </ContainerPage>
        </>
    );
}

export default CertificationsSkillsPage;
