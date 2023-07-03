import express   from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/Info.js'
import getUserRoute from './routes/GetInfo.js'
import getSearchRoute from './routes/SearchInfo.js'

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err);
    }
}

mongoose.connection.on('disconnected', () => {
    console.log("MongoDB Disconnected");
})

mongoose.connection.on('connected', () => {
    console.log("MongoDB Connected");
})

app.get('/', (req, res) => {
    res.send("Hi there")
})

app.use(express.json())
app.use('/createUser', userRoute)
app.use('/getUser', getUserRoute)
app.use('/searchUser', getSearchRoute);

app.listen(8000, () => {
    connect()
    console.log("Server is running on port 8000")
})