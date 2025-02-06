"use client";
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from 'emailjs-com';
import Image from 'next/image';

type FormData = {
  nombre: string;
  apellido: string;
  email: string;
  mensaje: string;
};

function Contacto() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    emailjs.send('service_iv3f325', 'template_xnarxbd', data, 'Y_ZdufVrpSUYf1AEV')
      .then((result) => {
        console.log(result.text);
        alert('Mensaje enviado con éxito');
      }, (error) => {
        console.log(error.text);
        alert('Error al enviar el mensaje');
      });
  };

  return (
    <div className="max-w-7xl pb-4 grid grid-cols-1 md:grid-cols-2 gap-10 bg-white">
    <div>
      <h2 className="bg-bg_gris text-bg_gris_claro rounded-full text-center py-2 block w-1/2 m-auto mt-10 mb-5 text-2xl text-bold font-montserrat font-black">CONTACTANOS</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            {...register('nombre', { required: 'El nombre es obligatorio' })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Apellido</label>
          <input
            {...register('apellido', { required: 'El apellido es obligatorio' })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.apellido && <p className="text-red-500 text-sm">{errors.apellido.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register('email', { required: 'El email es obligatorio', pattern: { value: /^\S+@\S+$/i, message: 'El email no es válido' } })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mensaje</label>
          <textarea
            {...register('mensaje', { required: 'El mensaje es obligatorio' })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje.message}</p>}
        </div>
        <div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Enviar</button>
        </div>
      </form>
    </div>
    <div>
        <Image alt="Contacto" width="500" height="500" src="/images/contacto.jpg" className="float-right" />
      </div>
    </div>
  );
}

export default Contacto;