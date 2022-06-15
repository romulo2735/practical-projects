import mongoose from 'mongoose';
const {
    Schema
} = mongoose;

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    accounts: [{
        name: String,
        role: String,
        enabled: Boolean
    }]
});

module.exports = mongoose.model('User', User);