const router = require('express').Router();
const CartItem = require('../models/CartItem');
const Product = require('../models/Product');

// Get all cart items with product details
router.get('/', async (req, res) => {
  try {
    const cartItems = await CartItem.find().populate('productId');
    res.json(cartItems);
  }catch (err) {   
    res.status(500).json({ message: err.message });
  }
});

// Add item to cart
router.post('/add', async (req, res) => {
  const { productId, qty } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    let cartItem = await CartItem.findOne({ productId });
    if (cartItem) {
      cartItem.qty += qty;
      const updatedItem = await cartItem.save();
      return res.status(200).json(updatedItem);
    }

    cartItem = new CartItem({ productId, qty });
    const newCartItem = await cartItem.save();
    res.status(201).json(newCartItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


//update cart item quantity
router.put('/:id', async (req, res) => {
  try {
    const cartItem = await CartItem.findById(req.params.id);
    if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });
    cartItem.qty = req.body.qty || cartItem.qty;
    const updatedCartItem = await cartItem.save();
    res.json(updatedCartItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Clear all cart items
router.delete('/clear', async (req, res) => {
  try {
    await CartItem.deleteMany({});
    res.json({ message: 'Cart cleared successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Remove item from cart
router.delete('/:id', async (req, res) => {
  try {
    const cartItem = await CartItem.findById(req.params.id);
    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }
    await cartItem.deleteOne(); // ✅ Use deleteOne() instead of remove()
    res.json({ message: 'Cart item removed' });
  } catch (err) {
    console.error('Error deleting cart item:', err);
    res.status(500).json({ message: err.message });
  }
});



module.exports = router;