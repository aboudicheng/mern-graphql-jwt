import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 32
    }
})

export default mongoose.model('User', userSchema);