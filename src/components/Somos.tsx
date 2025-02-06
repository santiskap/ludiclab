import React from 'react';
import Image from 'next/image';

const Somosludiclab: React.FC = () => {
  return (
    <div className="p-4 ld:px-32 md:px-10 sm:px-10 bg-bg_gris text-center h-72 md:h-48 flex items-center justify-center" id="ludiclab">
      <div className="flex flex-col md:flex-row lg:items-center md:items-start gap-4 items-center space-x-4">
        <Image className='block md:hidden lg:block' alt="Somos Ludiclab" width="235" height="58" src="/images/somos_ludiclab.png" />
        <h2 className="pl-12 text-2xl font-poppins text-left relative leading-snug">    
          Somos una 
          <strong className="text-turquesa"> consultora educativa </strong>
          que juega a transformar realidades a través de la  
          <span className="relative inline-block z-10 ml-2">  actitud lúdica 
            <span className="absolute left-0 bottom-1 w-full h-2 bg-turquesa rounded-full z-[-1]">
            </span>
          </span> 
        </h2>
      </div>
    </div>
  );
}

export default Somosludiclab;