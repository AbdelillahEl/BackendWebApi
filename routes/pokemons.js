import express from 'express';
import Pokemon from '../models/pokemon.js';


const router = express.Router();
//get all pokemons
router.get('/', async(req, res) => {
    try{
        const pokemons= await Pokemon.find({});
        res.status(200).json(pokemons);
    }
    catch(err){
        console.log(err.message);
    }
    
});
//Find specific Pokemon with id
router.get('/:id', async(req, res) => {
    try{
        const pokemon = await Pokemon.findById(req.params.id);
        res.status(200).json(pokemon);

    }
    catch(err){
        console.log(err.message);
        res.status(500).send('Server Error');

    }
})
//Update Pokemon
router.put('/:id', async(req, res) => {
    try{
        const pokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body);
        if(!pokemon){
            return res.status(404).json({msg: 'Pokemon not found'});
        }
        res.status(200).json(pokemon);

    }
    catch(err){
        
        res.status(500).send('Server Error');
    }
})
//Remove Pokemon
router.delete('/:id', async(req, res) => {
    try{
        const pokemon = await Pokemon.findByIdAndDelete(req.params.id);
        if(!pokemon){
            return res.status(404).json({msg: 'Pokemon not found'});
        }
        res.status(200).json(pokemon);
    }
    catch(err){
        res.status(500).send('Server Error');

    }});


//Add new Pokemon
router.post('/', async(req, res) => {
    try{
        const newPokemon = await Pokemon.create(req.body);
        res.status(200).json(newPokemon);
    }catch(err){
        console.log(err.message);
     res.status(500).send('Server Error');
        

    }
    }
)
export default router;