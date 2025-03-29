import express from 'express';
import cors from 'cors';
import 'dotenv/config';


//app config
const app = express();
const PORT = process.env.PORT || 4000;


//middleware
app.use(cors());
app.use(express.json()); 

//api 

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Сървърт е стартиран на порт: http://localhost:${PORT}`);
})   