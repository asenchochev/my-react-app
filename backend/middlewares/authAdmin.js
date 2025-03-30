import jwt from 'jsonwebtoken';

const authAdmin = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; 

    if (!token) {
        return res.status(401).json({ message: 'Не е предоставен токен.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Невалиден токен.' });
        }

        req.user = decoded;
        next();
    });
}