// /components/Skills.tsx
import { FaJava, FaCogs, FaDatabase, FaGitAlt } from "react-icons/fa"; // Importamos los iconos necesarios

interface SkillsProps {
    skills: string[];
}

const Skills = ({ skills }: SkillsProps) => {
    const skillIcons: { [key: string]: JSX.Element } = {
        "Java": <FaJava className="text-2xl text-yellow-500" />,
        "Spring Boot": <FaCogs className="text-2xl text-green-500" />,
        "Hibernate": <FaCogs className="text-2xl text-orange-500" />,
        "MySQL": <FaDatabase className="text-2xl text-blue-600" />,
        "Patrones de diseño": <FaCogs className="text-2xl text-purple-600" />,
        "SOLID": <FaCogs className="text-2xl text-teal-600" />,
        "Git": <FaGitAlt className="text-2xl text-gray-400" />,
        "MariaDB": <FaDatabase className="text-2xl text-red-500" />
    };

    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {skills.map((skill, index) => (
                <div key={index} className="bg-darkBg p-4 rounded-lg shadow-lg text-center">
                    <div className="mb-2">{skillIcons[skill]}</div>
                    <p className="text-white font-semibold">{skill}</p>
                </div>
            ))}
        </div>
    );
}

export default Skills;
