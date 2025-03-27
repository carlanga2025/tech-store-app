import { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ShoppingCart, Home, Laptop, Mail } from "lucide-react";

const Header = ({ carrito, removeCart, increaseCart, decreaseCart, clearCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isEmpty = useMemo(() => carrito.length === 0, [carrito]);
  const totalCarrito = useMemo(() => {
    return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  }, [carrito]);

  const totalCarritoFixed = Number(totalCarrito).toFixed(2);

  const totalItems = useMemo(() => carrito.reduce((total, item) => total + item.cantidad, 0), [carrito]);

  return (
    <header className="bg-gray-900 text-white shadow-lg relative">
      <div className="flex justify-between items-center px-5 py-5 md:px-10">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src="./pictures/logo.png" alt="Logo" width={50} />
          <h3 className="text-3xl font-bold text-indigo-400">Gamer Store</h3>
        </div>

        {/* Botón menú hamburguesa */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Menú de navegación */}
        <nav
          className={`absolute top-16 left-0 w-full bg-gray-900 md:static md:w-auto md:flex transition-all duration-300 ease-in-out z-50 shadow-lg md:shadow-none ${isOpen ? "block" : "hidden"
            }`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-12 md:gap-20 text-xl p-6 md:p-0">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "text-indigo-400" : "hover:text-indigo-300")}>
                <Home size={32} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/laptops" className={({ isActive }) => (isActive ? "text-indigo-400" : "hover:text-indigo-300")}>
                <Laptop size={32} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" className={({ isActive }) => (isActive ? "text-indigo-400" : "hover:text-indigo-300")}>
                <Mail size={32} />
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Carrito */}
        <div className="relative cursor-pointer" onClick={() => setIsCartOpen(!isCartOpen)}>
          <ShoppingCart size={32} />
          <span className="absolute -top-2 -right-2 bg-orange-600 rounded-full text-gray-900 font-bold px-2 py-1 text-xs">
            {totalItems}
          </span>
        </div>
      </div>

      {/* Dropdown Carrito */}
      {isCartOpen && (
        <div className="absolute right-5 mt-2 w-[56rem] max-h-[500px] overflow-y-auto bg-gray-800 p-6 text-gray-200 shadow-lg rounded-md z-50">
          {isEmpty ? (
            <p className="text-center font-bold">El carrito está vacío</p>
          ) : (
            <>
              <table className="w-full text-lg">
                <thead className="border-b border-gray-700 bg-gray-900">
                  <tr>
                    <th className="text-white p-3 text-xl">Nombre</th>
                    <th className="text-white p-3 text-xl">Cantidad</th>
                    <th className="text-white p-3 text-xl">Subtotal</th>
                    <th className="text-white p-3 text-xl">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map((producto) => (
                    <tr key={producto.id} className="text-lg">
                      <td className="p-4">{producto.nombre}</td>
                      <td className="flex items-center gap-3 p-4">
                        <button
                          onClick={() => increaseCart(producto.id)}
                          className="px-4 py-2 bg-gray-700 text-white text-lg rounded-lg"
                        >
                          +
                        </button>
                        <span className="text-xl font-bold">{producto.cantidad}</span>
                        <button
                          onClick={() => decreaseCart(producto.id)}
                          className="px-4 py-2 bg-gray-700 text-white text-lg rounded-lg"
                        >
                          -
                        </button>
                      </td>
                      <td className="p-4 text-xl font-semibold">${(producto.precio * producto.cantidad).toFixed(2)}</td>
                      <td className="p-4">
                        <button
                          onClick={() => removeCart(producto.id)}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg text-lg"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Total del carrito */}
              <div className="mt-4 p-4 bg-gray-900 text-white text-xl font-bold text-center rounded-lg">
                Total a pagar: ${totalCarritoFixed}
              </div>
              <button onClick={() => clearCart()} className="bg-green-600 text-white py-1.5 px-2 w-full mt-3 rounded-md">
                Vaciar Carrito
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;






