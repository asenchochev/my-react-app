import dotenv from 'dotenv';
import Doctor from '../models/Doctor.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dotenv.config();

const addDoctor = async (req, res) => {
    try {
        const { name, email, password, phone, specialty, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;

        if (!name || !email || !password || !phone || !specialty || !fees) {
            return res.status(400).json({ message: 'Моля, попълнете всички задължителни полета.' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Моля, въведете валиден имейл адрес.' });
        }

        const existingDoctor = await Doctor.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({ message: 'Доктор с този имейл вече съществува.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const imagePath = imageFile ? `/uploads/${imageFile.filename}` : '';

        let parsedAddress = {};
        if (address) {
            try {
                parsedAddress = JSON.parse(address);
            } catch (error) {
                return res.status(400).json({ message: 'Грешен формат на адреса. Трябва да е JSON.' });
            }
        }

        const newDoctor = new Doctor({
            name,
            email,
            password: hashedPassword,
            phone,
            specialty,
            image: imagePath,
            degree,
            experience,
            about,
            fees,
            address: parsedAddress,
        });

        await newDoctor.save();

        res.status(201).json({ message: 'Докторът е добавен успешно!', doctor: newDoctor });
    } catch (error) {
        res.status(500).json({ message: 'Грешка при добавянето на доктор.', error: error.message });
    }
};

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Моля, попълнете всички задължителни полета.' });
        }

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminEmail || !adminPassword) {
            return res.status(500).json({ message: 'Липсват администраторски креденшъли.' });
        }

        const passwordMatch = await bcrypt.compare(password, adminPassword);
        if (email !== adminEmail || !passwordMatch) {
            return res.status(400).json({ message: 'Невалиден имейл или парола.' });
        }

        const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Успешно влизане!', token });
    } catch (error) {
        res.status(500).json({ message: 'Грешка при влизане.', error: error.message });
    }
};

const allDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find({}).select('-password');
        res.status(200).json({ success: true, doctors });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export { addDoctor, loginAdmin, allDoctors };
