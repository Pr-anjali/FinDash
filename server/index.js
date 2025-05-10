import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import bodyParser from "body-parser";
import morgan from "morgan";

/*Configurations*/
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

/*Mongoose*/
const PORT = process.env.PORT || 1337;
mongoose.connect(process.env.MONGO_URL)
        .then(async ()=>{
            app.listen(PORT, () => {
                console.log(`Server is listening on the port ${PORT}`);
            })
        })
        .catch((error)=>{
            console.log(error, 'did not connect');
        })