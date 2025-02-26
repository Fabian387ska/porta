// /components/Certification.tsx
interface CertificationProps {
    title: string;
    issuer: string;
    date: string;
    link: string;
}

const Certification = ({ title, issuer, date, link }: CertificationProps) => {
    return (
        <div className="bg-darkBg p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-secondary">{title}</h3>
            <p className="text-gray-400">{issuer}</p>
            <p className="text-gray-500">{date}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Ver Certificado
            </a>
        </div>
    );
}

export default Certification;
