import Navbar from "../utils/Navbar";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/pictures/banner1.png",
  "/pictures/banner2.png",
  "/pictures/banner3.png",
];

const Nosotros = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Cambio automático cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [currentIndex]);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Navbar />

      {/* Carrusel de imágenes */}
      <div className="relative flex justify-center items-center w-full h-[700px] overflow-hidden">
        {/* Botón izquierda */}
        <button
          onClick={prevSlide}
          className="absolute left-5 bg-gray-800 text-white p-3 rounded-full z-10 hover:bg-gray-700 transition"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Imagen */}
        <div className="w-full h-full">
          <img
            src={images[currentIndex]}
            alt="Banner"
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        {/* Botón derecha */}
        <button
          onClick={nextSlide}
          className="absolute right-5 bg-gray-800 text-white p-3 rounded-full z-10 hover:bg-gray-700 transition"
        >
          <ChevronRight size={32} />
        </button>

        {/* Puntos de navegación */}
        <div className="absolute bottom-5 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition ${index === currentIndex ? "bg-indigo-500" : "bg-gray-200"
                }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Sección de texto */}
      <div className="max-w-4xl mx-auto text-center py-14 px-5">
        <h1 className="text-3xl font-extrabold tracking-tight text-blue-500 sm:text-5xl md:text-6xl">
          Nosotros
        </h1>
        <h2 className="text-3xl font-semibold text-gray-300 mt-4">
          La cultura del servicio y la atención al cliente son las razones por las que nos eliges
        </h2>
        <p className="text-xl text-gray-400 leading-relaxed">
          Sabemos que necesitas soluciones tecnológicas eficientes, confiables y adaptadas a las exigencias de tu negocio.
          Por eso, en Gamer Store no solo te ofrecemos productos y servicios TIC de las marcas más reconocidas, sino que
          también nos alineamos con tus objetivos para garantizar resultados que impulsen tu crecimiento.
          Como parte de un grupo internacional líder, tenemos la experiencia y la capacidad para ofrecerte mucho más que
          una distribución tradicional: soluciones adaptadas a nuevos modelos de negocio y una ejecución impecable de proyectos.
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center mt-10 font-semibold bg-gray-800 py-6 text-gray-300 shadow-md">
        <p>© 2025 Gamer Store | Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Nosotros;

