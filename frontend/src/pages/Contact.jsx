import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-20 px-6 md:px-12 lg:px-24 text-gray-800">
      {/* Заглавие със стил */}
      <motion.p
        className="text-5xl font-extrabold text-center text-gray-900 mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        СВЪРЖИ СЕ С <span className="text-teal-400">НА</span>С
      </motion.p>

      {/* Секция с изображение */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={assets.contact_image}
          alt="Contact Us"
          className="w-full max-w-2xl mx-auto rounded-xl shadow-2xl"
        />
      </motion.div>

      {/* Контактна информация */}
      <div className="max-w-3xl mx-auto space-y-8 text-center">
        <motion.p
          className="text-3xl font-bold text-gray-900"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          НАШИЯТ ОФИС
        </motion.p>

        <motion.p
          className="text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.7 }}
        >
          54709 Willms Station, Suite 350, Washington, USA
        </motion.p>

        <motion.p
          className="text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.9 }}
        >
          Tel: <span className="font-semibold text-teal-400">(415) 555‑0132</span>
        </motion.p>

        <motion.p
          className="text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Email: <span className="font-semibold text-teal-400">asenchochev@gmail.com</span>
        </motion.p>

        {/* Секция за кариера */}
        <motion.p
          className="text-2xl font-semibold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.2 }}
        >
          Careers at <span className="text-teal-400">MediCenter</span>
        </motion.p>

        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.4 }}
        >
          Learn more about our teams and job openings.
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
