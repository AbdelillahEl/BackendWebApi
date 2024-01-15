import express from 'express';
import Trainer from '../models/trainer.js';

const router = express.Router( );

//Update trainer
router.put('/:id', async(req, res) => {
    
    try{
        const trainer = await Trainer.findByIdAndUpdate(req.params.id, req.body);
        if(!trainer){
            return res.status(404).json({msg: 'Trainer not found'});

        }
        res.status(200).json(trainer);
    }
    catch(err){
        res.status(500).send('Server Error');

    }
});
//Delete trainer
router.delete('/:id', async(req, res) => {
    try{
        const trainer = await Trainer.findByIdAndDelete(req.params.id);
        if(!trainer){
            return res.status(404).json({msg: 'Trainer not found'});
        }
        res.status(200).json(trainer);
    }
    catch(err){
        res.status(500).send('Server Error');
    }
});


//Find specific trainer with id
router.get('/:id', async(req, res) => {
    try{
        const trainer = await Trainer.findById(req.params.id);
        res.status(200).json(trainer);
    }
    catch(err){
        console.log(err.message);
        res.status(500).send('Server Error');

    }
})
//get all trainers
router.get('/', async(req, res) => {
    try{
        const trainers= await Trainer.find({});
        res.status(200).json(trainers);
    }
    catch(err){
        console.log(err.message);
        res.status(500).send('Server Error');
    
}

});

//Create new trainer
router.post('/', async(req, res) => {
    try{
        const newTrainer = await Trainer.create(req.body);
        res.status(200).json(newTrainer);
    }catch(err){
        console.log(err.message);
     res.status(500).send('Server Error');
        

    }
    }
);
export default router;