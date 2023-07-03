import mongoose from "mongoose"

const InfoSchema = new mongoose.Schema({
    fullName: {
        type: String, 
        required: true
    },
    age: {
        type: Number, 
        required: true
    },
    percentage: {
        type: Number, 
        required: true
    },
})

export default mongoose.model('Info', InfoSchema)