import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Home, Laptop, Mail, ShoppingCart } from "lucide-react"; // Íconos de Lucide React

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-gray-900 py-5 px-5 md:px-10 shadow-lg relative">
      {/* Logo */}
      <div className="flex items-center gap-5">
        <img src="./pictures/logo.png" alt="Logo" width={50} />
        <h3 className="text-3xl font-bold text-indigo-400">Gamer Store</h3>
      </div>

      {/* Botón de menú (solo en móviles) */}
      <button
        className="md:hidden text-gray-300 text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Menú de navegación */}
      <nav
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent md:flex md:items-center md:gap-20 transition-all duration-300 z-50 shadow-lg md:shadow-none ${isOpen ? "block" : "hidden"
          }`}
      >
        <ul className="flex flex-col md:flex-row gap-12 md:gap-20 text-xl text-gray-300 font-semibold items-center p-5 md:p-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-indigo-400" : "hover:text-gray-400"
              }
            >
              <Home size={32} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/laptops"
              className={({ isActive }) =>
                isActive ? "text-indigo-400" : "hover:text-gray-400"
              }
            >
              <Laptop size={32} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive ? "text-indigo-400" : "hover:text-gray-400"
              }
            >
              <Mail size={32} />
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Icono del carrito */}
      <Link to="/laptops">
        <div className="relative cursor-pointer">
          <ShoppingCart size={32} className="text-gray-300 hover:text-white transition" />
        </div>
      </Link>
    </header>
  );
};

export default Navbar;






