import Image from 'next/image';

const Servicios_img = () => {
    return(
        <div className="bg-gray-200">
            <div className="relative w-full xl:h-[600px] lg:h-[500px] sm:h-[400px]">
                <Image 
                alt="Servicios Ludiclab" 
                src="/images/servicios_img.jpg" 
                layout="fill" 
                objectFit="cover"
                objectPosition="top"
                />
            </div>
        </div>
    );

    
}

export default Servicios_img;

