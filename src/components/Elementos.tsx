import React from "react";
import Image from "next/image";
import Link from "next/link";

const Elementos: React.FC = () => {
    return (
        <div className="bg-bg_gris_claro p-24" id="elementos">
            <h1 className="font-poppins text-3xl text-bg_gris text-center pb-12 leading-8">
                Cada experiencia que creamos es el resultado de <br /> una combinación única de la actitud lúdica y <br /> <strong>nuestros 6 elementos:</strong>
            </h1>
            <ul className="w-96 m-auto grid grid-cols-2 md:grid-cols-4 gap-2 justify-items-center">
                <li>
                    <Image alt="Conexion" width="111" height="111" src="/images/conexion.png" />
                </li>
                <li>
                    <Image alt="Disfrute" width="111" height="111" src="/images/disfrute.png" />
                </li>
                <li>
                    <Image alt="Iteracion" width="111" height="111" src="/images/iteracion.png" />
                </li>
                <li>
                    <Image alt="Presencia" width="111" height="111" src="/images/presencia.png" />
                </li>
                <li>
                    <Image alt="Reflexion" width="111" height="111" src="/images/reflexion.png" />
                </li>
                <li>
                    <Image alt="Sentido" width="111" height="111" src="/images/sentido.png" />
                </li>
            </ul>
            <h3 id="contacto" className="bg-bg_gris hover:bg-naranja text-bg_gris_claro rounded-full text-center py-3 block lg:w-1/4 md:w-60 m-auto mt-20 lg:text-lg md:text-base tracking-[0.4em] font-montserrat font-light">
                <Link href="mailto:santiagotula1@gmail.com" className="py-5">CONTACTANOS</Link>
            </h3>
        </div>
    );
}

export default Elementos;