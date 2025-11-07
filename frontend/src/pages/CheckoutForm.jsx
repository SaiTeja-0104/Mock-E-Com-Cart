import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextApi } from "../context/ContextApi";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const {getTotalCost} = useContext(ContextApi);
  const cost = getTotalCost();
  const time = new Date().toLocaleString();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    cost: cost,
    time: time
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/receipt", { state: formData });
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700"
        >
          Confirm & View Receipt
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
