const Product = ({ producto, addToCart }) => {
  const { marca, nombre, descripcion, precio, imagen } = producto;

  return (
    <div className="group relative bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      {/* Imagen */}

      <div className="overflow-hidden rounded-md bg-gray-400">
        <img
          src={imagen}
          alt={nombre}
          className="aspect-square w-full rounded-md object-cover group-hover:opacity-75 transition mix-blend-multiply"
        />
      </div>



      {/* Información */}
      <div className="mt-4 flex justify-between items-center">
        <h1 className="font-semibold text-lg text-gray-300">{nombre}</h1>
        <span className="text-gray-900 font-medium bg-blue-500 px-2 py-1 rounded-md">
          {marca}
        </span>
      </div>

      <div className="mt-2">
        <p className="text-md text-gray-400">{descripcion}</p>
        <p className="text-lg font-semibold text-blue-400">$ {precio}</p>
      </div>

      {/* Botón Comprar */}
      <div className="mt-4">
        <button
          onClick={() => addToCart(producto)}
          className="bg-orange-500 w-full py-2 hover:bg-gray-600 hover:text-orange-500 rounded-lg font-bold uppercase text-sm transition cursor-pointer"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Product;





