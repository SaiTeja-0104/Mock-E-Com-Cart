import React, { use, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ContextApi } from "../context/ContextApi";


const ReceiptPage = () => {
  const { getTotalCost,clearCart } = useContext(ContextApi);
  const { state } = useLocation();
  const { name, email, address, phone,cost,time } = state || {};

  
  useEffect(() => {
    clearCart();
  }, []);

  return (
  <div className="px-4 flex items-center justify-center pt-20 pb-20">
    <div className="max-w-xl w-full p-6 bg-white border rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Order Receipt</h2>
      <div className="space-y-2 text-gray-700">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Total Cost:</strong> ₹{cost}</p>
        <p><strong>Order Time:</strong> {time}</p>
      </div>
      <div className="mt-6 text-center">
        <p className="text-green-600 font-semibold">Thank you for shopping with us!</p>
      </div>
    </div>
  </div>
);

};

export default ReceiptPage;
