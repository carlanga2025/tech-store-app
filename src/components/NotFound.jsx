
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-5">

      <img
        src="./pictures/404.png"
        alt="Error 404"
        className="w-96 md:w-[500px] mb-6"
      />


      <h2 className="text-4xl font-bold mb-4">¡Oops! Página no encontrada</h2>
      <p className="text-lg text-gray-400 mb-6">
        Parece que la página que buscas no existe.
      </p>
      <NavLink
        to="/"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-5 rounded-lg transition"
      >
        Ir a Nosotros
      </NavLink>
    </div>
  );
};

export default NotFound;
