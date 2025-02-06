import React from 'react';

const Frase: React.FC = () => {
    return (
        <div className="bg-bg_gris_claro pt-10 px-10">
            <div className="flex justify-center items-center h-56 ">
                <p className="text-center lg:text-2xl md:text-xl font-poppins text-frase relative leading-normal">
                    Pero <span className="relative inline-block z-10">
                        jugar <span className="absolute left-0 bottom-1 w-full h-2 bg-naranja rounded-full z-[-1]"></span> 
                    </span> no es solo cosa de niños, es una capacidad muy humana que nos  <strong className="text-naranja"> forma, nos conforma y nos transforma</strong> a lo largo de toda la vida. <br /> (Marin, 2024)
                </p>
            </div>
        </div>
    );
};

export default Frase;