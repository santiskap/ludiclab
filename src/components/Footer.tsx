import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="flex justify-between items-center p-4 bg-bg_gris text-white">
            <div className="footer-column">
                <Image src="/images/logo_blanco.png" alt="Ludiclab" width="100" height="100" />
            </div>
            <div className="footer-column flex space-x-4">
                <p className='font-montserrat text-sm text-bg_gris_claro font-light'>info@ludiclab.com.ar</p>
                {/*<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="/path/to/instagram-icon.png" alt="Instagram" className="footer-icon" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="/path/to/linkedin-icon.png" alt="LinkedIn" className="footer-icon" />
                </a>*/}
            </div>
        </footer>
    );
};

export default Footer;