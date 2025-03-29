import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Успешна връзка с базата данни!: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Грешка: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;