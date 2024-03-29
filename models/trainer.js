import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required: true},
});

const Trainer = mongoose.model('Trainer', trainerSchema);
export default Trainer;