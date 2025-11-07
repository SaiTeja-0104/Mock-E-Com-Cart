import React, { useContext } from "react";
import sample from "../assets/VibeCommerce.png"
import { ContextApi } from '../context/ContextApi.jsx';

const ProductCard = ({ product }) => {
  const {addToCart} = useContext(ContextApi);
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 flex flex-col">
      
      <div className="w-full h-56 bg-gray-100 overflow-hidden rounded-t-xl">
        <img src={sample} alt={product.name} className="w-full h-full bg-gray-200 object-cover"/>
      </div>

      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600">
            ₹{product.price}
          </span>
          <button onClick={()=>addToCart(product._id)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
