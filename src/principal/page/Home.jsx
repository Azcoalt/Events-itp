import {Navbar} from "../../ui/components"

export const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-500 to-indigo-950">
        <Navbar/>
        <section className="h-screen relative grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:p-12">
          <div className="text-center md:text-left animate-fade-in-right">
            <h4 className="font-baumans text-2xl text-white mb-8"><b>EVENTOS</b></h4>
            <h1 className="font-protest text-5xl md:text-9xl text-white m-4 md:m-10">ITP</h1>
            <p className="font-baumans text-white text-xl mb-10">"¡Conectando mentes, impulsando el futuro! Únete a la revolución tecnológica."</p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img className="w-20 md:w-96 mb-6 animate-blurred-fade-in animate-delay-700" src="https://www.puebla.tecnm.mx/wp-content/themes/tecnm/images/logo-tec-p.svg" alt="Logo"/>
          </div>
        </section>

        {/**secion de informacion que son los eventos itp */}
        <div className=" pt-16 md:pt-60 flex justify-center gap-5">
          <div className="w-full max-w-xs md:max-w-3xl flex flex-col md:flex-row justify-between">
            <div className="container mx-auto w-full md:w-1/2 p-4">
              <img className="w-full" src="https://lh3.googleusercontent.com/p/AF1QipMsb62v6vNKNErrqd4B7_DkqEK_nOhwkATiuh3V=s680-w680-h510" alt="Evento" />
            </div>
            <div className="container mx-auto w-full md:w-1/2 p-4">
              <h1 className="text-3xl text-white font-protest mb-2">¿QUÉ SON LOS EVENTOS ITP?</h1>
              <p className=" font-baumans text-white text-xl mb-20">
              Los eventos ITP son reuniones, conferencias y actividades 
              diseñadas para reunir a profesionales del sector tecnologico, industrial y profecional con el fin de intercambiar 
              conocimientos, experiencias y últimas tendencias en el campo. Estos eventos suelen abarcar una amplia 
              gama de temas.Son oportunidades valiosas 
              para el aprendizajey el crecimiento profesional en la industria de la tecnología.
              </p>
            </div>
          </div>
        </div>

        {/*Secion de los eventos itp */}
        
      </div>
    </>
  )
}
