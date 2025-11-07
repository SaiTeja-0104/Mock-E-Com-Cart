import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const ContextApi = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products/get');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // Fetch cart items
  const fetchCart = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/cart');
      setCart(response.data);
      const quantity = response.data.reduce((sum, item) => sum + item.qty, 0);
      setTotalQuantity(quantity); 
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const clearCart = async () => {
    try {
      await axios.delete("http://localhost:3000/api/cart/clear");
      setCart([]); // Clear local state
      fetchCart(); // Refresh cart
      toast.success("Thanks for your purchase! Order placed successfully.");
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };


  // Add item to cart
  const addToCart = async (productId, qty = 1) => {
    try {
      const response = await axios.post('http://localhost:3000/api/cart/add', {
        productId,
        qty,
      });
      toast.success('Product added to cart!');
      fetchCart(); // Refresh cart
    } catch (error) {
      toast.error('Error adding product to cart');
    }
  };

  // Update quantity
  const updateCartItemQty = async (cartItemId, qty) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/cart/${cartItemId}`, {
        qty,
      });
      console.log('Updated cart item:', response.data);
      fetchCart(); // Refresh cart
    } catch (error) {
      console.error('Error updating cart item:', error);
    }
  };

  // Remove item
  const removeFromCart = async (cartItemId) => {
    try {
      await axios.delete(`http://localhost:3000/api/cart/${cartItemId}`);
      toast.info('Item removed from cart');
      fetchCart(); // Refresh cart
    } catch (error) {
      toast.error('Error removing item from cart');
    }
  };

  // Calculate total cost
  const getTotalCost = () => {
    return cart.reduce((sum, item) => {
      return sum + item.qty * item.productId.price;
    }, 0);
  };

  const values = {
    products,
    cart,
    addToCart,
    updateCartItemQty,
    removeFromCart,
    fetchCart,
    getTotalCost,
    clearCart,
    totalQuantity
  };

  return (
    <ContextApi.Provider value={values}>
      {children}
    </ContextApi.Provider>
  );
};

export default ContextProvider;
