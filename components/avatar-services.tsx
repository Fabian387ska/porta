import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
    return (
        <MotionTransition position="right" className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
                <Image
                    src="/img2.png"
                    layout="fill" // Esto hace que la imagen ocupe todo el contenedor
                    objectFit="cover" // Mantiene la proporción sin distorsionar la imagen
                    alt="Avatar"
                />
            </div>
        </MotionTransition>
    );
}

export default AvatarServices;
