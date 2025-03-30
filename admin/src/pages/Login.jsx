import { useState } from "react";
import { motion } from "framer-motion";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Admin"); // Добавяме ролята (Админ/Доктор)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${role} Login:`, { email, password });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-400">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white shadow-xl rounded-2xl p-8 w-96 border-t-4 border-blue-600 backdrop-blur-md"
            >
                <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-3xl font-bold text-blue-700 text-center mb-6"
                >
                    MediCenter
                </motion.h2>

                <div className="flex justify-center mb-6">
                    <button
                        onClick={() => setRole("Admin")}
                        className={`text-xl px-6 py-2 ${role === "Admin" ? "bg-blue-600 text-white" : "bg-gray-200 text-blue-600"} rounded-l-lg focus:outline-none`}
                    >
                        Админ
                    </button>
                    <button
                        onClick={() => setRole("Doctor")}
                        className={`text-xl px-6 py-2 ${role === "Doctor" ? "bg-blue-600 text-white" : "bg-gray-200 text-blue-600"} rounded-r-lg focus:outline-none`}
                    >
                        Доктор
                    </button>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-blue-700 text-center font-extrabold text-3xl mb-6"
                >
                    {role === "Admin" ? "Админ Вход" : "Доктор Вход"}
                </motion.p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-gray-600 text-sm mb-1">Имейл</label>
                        <input
                            type="email"
                            placeholder="Въведете имейл"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 text-sm mb-1">Парола</label>
                        <input
                            type="password"
                            placeholder="Въведете парола"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                            required
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
                    >
                        Влизане
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default Login;
