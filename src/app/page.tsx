import React from 'react';
import Frase from '@/components/Frase';
import ServiciosImg from '@/components/ServiciosImg';
import Somosludiclab from '@/components/Somos';
import Servicios from '@/components/Servicios';
import Elementos from '@/components/Elementos';

const Page: React.FC = () => {
  return (
    <div className="grid">
      <Frase />
      <ServiciosImg />
      <Somosludiclab />
      <Servicios />
      <Elementos />
    </div>
  );
};

export default Page;