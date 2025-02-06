import React from 'react'

function Servicios() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 font-montserrat" id="servicios">
        <div className="text-center bg-naranja h-80 bg-[url('/images/bg_con.webp')] bg-no-repeat bg-left-bottom w-full">
          <div className="p-4 py-16 lg:py-16 md:py-10 px-20 lg:px-20 md:px-10 lg:h-40 md:h-32">
            <h2 className="font-montserrat text-2xl lg:text-2xl md:text-xl  font-bold tracking-normal pb-3">CONSULTORÍA</h2>
            <p className="font-montserrat text-lg lg:text-lg md:text-base leading-6 tracking-wide font-light">
              Acompañamos a equipos educativos que quieran transformar su institución desde una mirada lúdica.
            </p>
          </div>
        </div>
        <div className="text-center bg-turquesa h-80 bg-[url('/images/bg_dis.webp')] bg-no-repeat bg-right-bottom w-full">
          <div className="p-4 py-16  lg:py-16 md:py-10 px-20 lg:px-20 md:px-10 lg:h-40 md:h-32">
          <h2 className="font-montserrat text-2xl  lg:text-2xl md:text-xl font-bold tracking-normal pb-3">DISEÑO</h2>
            <p className="font-montserrat text-lg lg:text-lg md:text-base leading-6 tracking-wide font-light">
            Desde juegos de mesa hasta eventos empresariales y capacitaciones a medida, en Ludic lab <strong className='font-bold'>nos encanta diseñar </strong>todo tipo de experiencias lúdicas
            </p>
          </div>
        </div>
        <div className="text-center bg-naranja h-80 bg-[url('/images/bg_for.webp')] bg-no-repeat bg-right-bottom w-full">
          <div className="p-4 py-16 lg:py-16 md:py-10 px-20 lg:px-20 md:px-10 lg:h-40 md:h-32">
          <h2 className="font-montserrat text-2xl  lg:text-2xl md:text-xl font-bold tracking-normal pb-3">FORMACIÓN</h2>
            <p className="font-montserrat text-lg lg:text-lg md:text-base leading-6 tracking-wide font-light">
            Si querés <strong className='font-bold'>llevar el juego</strong> a tus clases, espacios, productos, reuniones de equipo o eventos, creemos que esta propuesta 
            puede ayudarte mucho.            </p>
          </div>
        </div>
      </div>
  )
}

export default Servicios