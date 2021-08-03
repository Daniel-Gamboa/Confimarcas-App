import { createContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { getFirestore } from "../firebase";

// crear el contexto
export const CartContext = createContext();

// componente que provee los datos
export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [addToCart, setAddToCart] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();
  const [totalItems, setTotalItems] = useState();

  useEffect(() => {
   
    async function getDataFromFirestore() {
      const DB = getFirestore(); // Conectando a la base de datos
      const COLLECTION = DB.collection('productos'); // Tomando la colección de productos
      const response = await COLLECTION.get();
      setProducts(response.docs.map(element => ({id: element.id, ...element.data() })));
    }
    getDataFromFirestore();
  

    //Calcular cantidad de items en el carrito
    let cantidadItems = 0;
    //Calcular total a pagar
    let precioFinal = 0;

    cart.forEach(element => {
      precioFinal += element.precio;
      cantidadItems += element.cantidad;
    })

    setTotal(precioFinal);
    setTotalItems(cantidadItems);
  }, [cart])

  function onAdd(id, quantity, precio, product) {
    setAddToCart(true);
    setIsAdded(true);
    shoppingCart(id, quantity, precio, product);
  }

  //Comprobando si el producto existe en el carrito
  function isInCart(id) {
    const element = cart.find(producto => producto.id === id);
    if (!element) {
      return false;
    } else {
      return true;
    }
  }

  // Agregar al carrito 
  function shoppingCart(id, quantity, precio, product) {
    // Si el producto existe en el carrito ...
    if (isInCart(id)) {
      const previousProduct = cart.find(producto => producto.id === id);
      // calcular cantidad total
      const newQuantity = previousProduct.cantidad + quantity;
      // calcular precio total del producto
      const newPrice = newQuantity * precio;
      // actualizar info producto
      const newProduct = { "id": previousProduct.id, "item": previousProduct.item, "cantidad": newQuantity, "price": newPrice };
      const previousCart = cart.filter(product => product.id !== id);
      // agrego el nuevo producto
      const newCart = [...previousCart, newProduct];
      setCart(newCart);
      // Si el producto no existe en el carrito ..
    } else {
      setCart([...cart, product]);
    }
  };

  //Eliminar producto del carrito
  function removeItemToCart(id) {
    const newCart = cart.filter(product => product.id !== id);
    setCart(newCart);
  };

  //Eliminar todos los productos del carrito
  function clearTheCart() {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ products, onAdd, addToCart, isAdded, setAddToCart, setIsAdded, quantity, setQuantity, cart, removeItemToCart, clearTheCart, total, totalItems }}>
      {products.length > 0 ? children : <Spinner animation="border" variant="info" />}
    </CartContext.Provider>
  )
};
