import jwt from 'jsonwebtoken';

const authDoctor = async (req, res, next) => {
    try {
        const { dtoken } = req.headers
        if (!dtoken) {
            return res.status(403).json({ success: false, message: "Не успяхте да влезете. Пробвайте отново!" });
        }
        const decoded = jwt.verify(dtoken, process.env.JWT_SECRET);
        req.body.docId = decoded.id

        next();
    } catch (error) {
        console.error(error);
        return res.status(403).json({ success: false, message: error.message });
    }
}

export default authDoctor;