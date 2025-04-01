import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';
import doctorModel from '../models/Doctor.js';
import jwt from 'jsonwebtoken';
import appointmentModel from '../models/Appointment.js';
import userModel from '../models/User.js';

const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;

        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "Всичко трябва да бъде въведено!" });
        }

        if (!imageFile) {
            return res.json({ success: false, message: "Трябва да изберете снимка!" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Моля, въведете правилен имейл" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Паролата трябва да е поне 8 символа" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url;

        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: address,
            date: Date.now()
        };

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        res.json({ success: true, message: "Докторът е добавен!" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const loginAdmin = async (req, res) => {
      try {
          const { email, password } = req.body;
  
          // Проверка дали имейлът съвпада с този в .env
          if (email === process.env.ADMIN_EMAIL) {
              // Сравняваме паролата от .env с въведената от потребителя
              if (password === process.env.ADMIN_PASSWORD) {
                  // Генериране на JWT токен с добавен срок на валидност
                  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Токенът ще изтече след 1 час
                  return res.json({ success: true, token });
              } else {
                  return res.json({ success: false, message: 'Невалидни данни за вход' });
              }
          } else {
              return res.json({ success: false, message: 'Невалидни данни за вход' });
          }
      } catch (error) {
          console.error(error);
          return res.json({ success: false, message: error.message });
      }
  };

const allDoctors = async (req, res) => {
    try {
        const doctors = await doctorModel.find({}).select('-password');
        res.json({ success: true, doctors });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const appointmentsAdmin = async (req, res) => {
    try {
        const appointments = await appointmentModel.find({});
        res.json({ success: true, appointments });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const appointmentCancel = async (req, res) => {
    try {
        const { appointmentId } = req.body;

        const appointmentData = await appointmentModel.findById(appointmentId);
        if (!appointmentData) {
            return res.json({ success: false, message: "Часът не е открит!" });
        }

        await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true });

        const { docId, slotDate, slotTime } = appointmentData;

        const doctorData = await doctorModel.findById(docId);
        if (!doctorData) {
            return res.json({ success: false, message: "Докторът не е открит" });
        }

        let slots_booked = doctorData.slots_booked;
        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime);

        await doctorModel.findByIdAndUpdate(docId, { slots_booked });

        res.json({ success: true, message: "Часът е отказан!" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const adminDashboard = async (req, res) => {
    try {
        const doctors = await userModel.find({});
        const users = await userModel.find({});
        const appointments = await appointmentModel.find({});

        const dashData = {
            doctors: doctors.length,
            appointments: appointments.length,
            patients: users.length,
            latestAppointments: appointments.reverse().slice(0, 5)
        };
        res.json({ success: true, dashData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export {
    addDoctor,
    loginAdmin,
    allDoctors,
    appointmentsAdmin,
    appointmentCancel,
    adminDashboard
};
