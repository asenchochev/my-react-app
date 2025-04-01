import jwt from 'jsonwebtoken';

const authAdmin = async (req, res, next) => {
    try {
        const token = req.headers.atoken;
        if (!token) {
            return res.status(403).json({ success: false, message: "Не успяхте да влезете. Пробвайте отново!" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        next();
    } catch (error) {
        console.error(error);
        return res.status(403).json({ success: false, message: error.message });
    }
}

export default authAdmin;