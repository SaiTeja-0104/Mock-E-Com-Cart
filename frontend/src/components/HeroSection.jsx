import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className= "font-pop h-[89.3vh] items-center flex bg-white relative text-white py-20 px-6 overflow-hidden">

      {/* Decorative floating shapes */}
      {/* <div className="absolute -top-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl animate-pulse"></div> */}

      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center z-10">
        <motion.h1
          className="text-4xl sm:text-6xl text-blue-400 font-extrabold leading-tight mb-4 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Elevate Your Style with{" "}
          <br />
          <span className="text-blue-800 drop-shadow-2xl">Vibe Commerce</span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-400 sm:text-xl max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Shop the latest fashion, accessories, and more — all in one cart.
          Mock checkout, real e-commerce experience!
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white cursor-pointer text-blue-400 font-semibold px-8 py-3 rounded-full shadow-md  hover:bg-blue-600 hover:text-white transition-colors"
          onClick={() => {
            const section = document.getElementById('shop-section');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Start Shopping
        </motion.a>
      </div>
      
          
    </section>
  );
}
