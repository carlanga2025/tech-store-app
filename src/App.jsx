import { useEffect, useState } from "react"
import Header from "./components/Header"
import Product from "./components/Product"
import { db } from "./data/db"


function App() {

  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }

  const [data] = useState(db)
  const [cart, setCart] = useState(initialCart)

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


  const agregarCarrito = (item) => {
    const itemExits = cart.findIndex(product => product.id === item.id)
    if (itemExits >= 0) {
      if (cart[itemExits].cantidad >= MAX_ITEMS) return
      const updateCart = [...cart]
      updateCart[itemExits].cantidad += 1
      setCart(updateCart)
    } else {
      item.cantidad = 1
      setCart([...cart, item])
    }
  }

  const removerCarrito = (id) => {
    setCart(prevcart => prevcart.filter(product => product.id !== id))

  }

  const incrementarCantidad = (id) => {
    const updateCart = cart.map(item => {
      if (item.id === id && item.cantidad < MAX_ITEMS) {
        return {
          ...item,
          cantidad: item.cantidad + 1
        }
      } return item
    })
    setCart(updateCart)
  }


  const decrementarCantidad = (id) => {
    const updateCart = cart.map(item => {
      if (item.id === id && item.cantidad > MIN_ITEMS) {
        return {
          ...item,
          cantidad: item.cantidad - 1
        }
      } return item
    })
    setCart(updateCart)
  }


  const limpiarCarrito = () => {
    setCart([])
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header
        carrito={cart}
        removeCart={removerCarrito}
        increaseCart={incrementarCantidad}
        decreaseCart={decrementarCantidad}
        clearCart={limpiarCarrito}
      />

      <main className="mx-auto max-w-4xl py-12 sm:py-5 lg:max-w-7xl ">
        <h3 className="text-6xl font-extrabold text-blue-500 ml-10 mb-6">Mejores Ofertas</h3>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">
          {data.map((product) => (
            <Product key={product.id} producto={product}
              addToCart={agregarCarrito}
            />
          ))
          }
        </div>
      </main>

      <footer className="text-center font-semibold bg-gray-800 py-6 text-gray-300 shadow-md mt-10">
        <p>© 2025 Gamer Store | Todos los derechos reservados.</p>
      </footer>

    </div>
  )
}

export default App

