import Doctor from '../models/Doctor.js'; 
import bcrypt from 'bcrypt';

const addDoctor = async (req, res) => {
    try {
        const { name, email, password, phone, specialty, image, degree, experience, about, fees, address } = req.body;

        if (!name || !email || !password || !phone || !specialty || !fees) {
            return res.status(400).json({ message: 'Моля, попълнете всички задължителни полета.' });
        }

        const existingDoctor = await Doctor.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({ message: 'Доктор с този имейл вече съществува.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        
        const newDoctor = new Doctor({
            name,
            email,
            password: hashedPassword,
            phone,
            specialty,
            image,
            degree,
            experience,
            about,
            fees,
            address,
        });

        
        await newDoctor.save();

        
        res.status(201).json({ message: 'Докторът е добавен успешно!', doctor: newDoctor });
    } catch (error) {
        res.status(500).json({ message: 'Грешка при добавянето на доктор.', error: error.message });
    }
};

export { addDoctor };
