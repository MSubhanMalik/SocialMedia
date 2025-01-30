import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './Router/router.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(cors({
    allowedHeaders: ["Content-Type"],
    origin: "http://localhost:5173/",
    methods: ["PUT", 'GET', 'DELETE', 'UPDATE', 'POST', 'HEAD']
}))
app.use('/api', router);

mongoose.connect(process.env.MONGO_DB_URI).then((connection)=> {
    console.log("Database Connection Succesful");
    app.listen(PORT, ()=> {
        console.log("Server is running on PORT", PORT);
    })
})
