import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const features = [
  { title: "Интуитивен дизайн", description: "Лесна за използване платформа, достъпна за всички." },
  { title: "Бързо записване", description: "Резервирайте часове само с няколко клика." },
  { title: "Надеждна поддръжка", description: "Екип от професионалисти, готови да ви помогнат." }
];

const About = () => {
  return (
    <div className="bg-gray-100 py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center text-gray-800">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <p className="text-5xl font-bold uppercase tracking-wide text-gray-900">
          ЗА <span className="text-blue-600">НАС</span>
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center max-w-6xl gap-12">
        <motion.img
          src={assets.about_image}
          alt="About Us"
          className="w-full lg:w-1/2 rounded-2xl shadow-xl object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        
        <motion.div 
          className="lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg leading-relaxed">
            Добре дошли в <span className="font-semibold text-blue-600">Prescripto</span>, вашият доверен партньор в управлението на вашите здравни нужди. Ние разбираме предизвикателствата при насрочване на прегледи и управление на здравни досиета.
          </p>
          <p className="text-lg leading-relaxed">
            <span className="font-semibold text-blue-600">Prescripto</span> се ангажира с високи постижения в технологиите за здравеопазване. Ние непрекъснато подобряваме нашата платформа, за да предоставим превъзходно обслужване.
          </p>
          <div>
            <b className="text-xl text-gray-900">Нашата визия</b>
            <p className="text-lg leading-relaxed mt-2">
              Our vision at <span className="font-semibold text-blue-600">Prescripto</span> is to create a seamless healthcare experience for every user.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="mt-16 text-center max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-3xl font-bold uppercase tracking-wide text-gray-900 mb-6">
          ЗАЩО ДА <span className="text-blue-600">ИЗБЕРЕТЕ НАС</span>
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          В Prescripto поставяме нашите потребители на първо място, като предлагаме удобни, бързи и сигурни решения за управление на здравните им грижи.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-xl font-semibold text-blue-600">✔ {feature.title}</p>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
