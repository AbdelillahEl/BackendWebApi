import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
    name:{type: String , required: true, unique: true},
    type: {type: String, required: true},
    description: {type: String, required: true},
    hp: {type: Number, required: true},
});


const Pokemon = mongoose.model('Pokemon', pokemonSchema);
export default Pokemon;