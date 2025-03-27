import Navbar from "../utils/Navbar";

const Contacto = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />

      {/* Contenedor que ajusta el contenido al centro de la pantalla */}
      <div className="flex-grow flex flex-col justify-center items-center px-5">
        <h1 className="text-6xl font-extrabold mb-6 text-blue-500">Contacto</h1>

        <div className="w-3/4 md:w-2/3 lg:w-1/2 bg-gray-800 p-8 rounded-xl shadow-lg">
          <form className="flex flex-col space-y-4">
            <label className="text-lg font-semibold">Nombre</label>
            <input
              type="text"
              className="w-full h-14 px-4 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe tu nombre"
            />

            <label className="text-lg font-semibold">Correo Electrónico</label>
            <input
              type="email"
              className="w-full h-14 px-4 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ejemplo@email.com"
            />

            <label className="text-lg font-semibold">Mensaje</label>
            <textarea
              className="w-full h-24 px-4 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe tu mensaje aquí"
            />

            <button className="w-full h-14 bg-blue-500 text-lg font-bold rounded-lg hover:bg-blue-600 transition">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>

      <footer className="text-center font-semibold bg-gray-800 py-4 text-gray-300 shadow-md">
        <p>© 2025 Gamer Store | Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Contacto;


