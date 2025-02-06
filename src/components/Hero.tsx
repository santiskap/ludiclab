import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="relative xl:h-[500px] lg:h-[400px] sm:h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('/images/ludiclab_bg.jpg')" }}>
            <div className="absolute inset-0"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
            </div>
        </div>
    );
};

export default Hero;