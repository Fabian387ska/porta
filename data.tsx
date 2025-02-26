import { GraduationCap, Code, Mail, GitBranch, Database, List, BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Github, Phone } from "lucide-react";


export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/jesuscastillonolasco",
    },
    {
        id: 2,
        logo: <Phone size={30} strokeWidth={1} />,
        src: "https://wa.me/5534696342?text=Hola,%20me%20interesa%20contactarte!",
    },
    {
        id: 3,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "mailto:jesuscastillonolasco@gmail.com",
    },
    {
        id: 4,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/jose-de-jesus-castillo-nolasco-8b1738321/?trk=opento_sprofile_topcard",
    }
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Certificados",
        icon: <GraduationCap size={25} color="#fff" strokeWidth={1} />,
        link: "/certificaciones",
    },
    {
        id: 6,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    }
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Universidad Nacional Autónoma de México (UNAM)",
        subtitle: "Diplomado en el Desarrollo de Sistemas con Tecnología Java",
        description: "Diplomado especializado en el desarrollo de sistemas empresariales con Java, enfocado en la creación de aplicaciones robustas y escalables utilizando tecnologías como Spring Boot, Hibernate y JPA.",
        date: "Sep 2024 - Presente",
    },
    {
        id: 2,
        title: "Universidad Autónoma del Estado de México (UAEM)",
        subtitle: "Prácticas Profesionales – Desarrollador y Soporte Técnico",
        description: "Apoyé en el mantenimiento del front-end de la página web institucional, mejorando la interfaz y optimizando la usabilidad. Realicé tareas de soporte en infraestructura tecnológica, incluyendo laboratorios de cómputo y redes, y colaboré en la resolución de incidencias y actualización de equipos y software.",
        date: "Feb 2024 - Jun 2024",
    },
    {
        id: 3,
        title: "Universidad Autónoma del Estado de México (UAEM)",
        subtitle: "Egresado de Ingeniería en Sistemas Inteligentes",
        description: "Egresado de Ingeniería en Sistemas Inteligentes, con experiencia en desarrollo backend en Java. Apasionado por la creación de soluciones tecnológicas eficientes y escalables, aplicando buenas prácticas y arquitecturas modernas.",
        date: "Jun 2019 - Jun 2024",
    },
   
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 3,
        text:"Cursos completados de manera autodidacta",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 2,
        text: "Proyectos completados en mi portafolio",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 20000,
        text: "Horas dedicadas al aprendizaje y desarrollo de Java",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Code  />,
        title: "Desarrollo Java Jr.",
        description:"Desarrollo de aplicaciones utilizando Java y frameworks modernos como Spring Boot.",
    },
    {
        icon: <GitBranch />,
        title: "Desarrollo de API",
        description: "Creación y mantenimiento de APIs RESTful eficientes y seguras.",
    },
    {
        icon: <Database />,
        title: "Gestión de Bases de Datos",
        description: "Diseño, implementación y optimización de bases de datos SQL (MySQL, MariaDB).",
    },
    {
        icon: <List  />,
        title: "Metodologías Ágiles",
        description: "Trabajo con metodologías ágiles como Scrum.",
    },
    {
        icon: <Rocket />,
        title: "Integración y Despliegue Continuo",
        description: "Automatización de procesos de integración y despliegue con CI/CD.",
    },
];


export const dataPortfolio = [
    {
        id: 1,
        title: "Reconocimiento de Emociones",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/jesuscastillonolasco/Sistema-de-Reconocimiento-de-Emociones-",
        urlDemo: "https://diotima.revista-diotima.com/index.php/home/issue/view/2/15",
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];