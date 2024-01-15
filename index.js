import express from 'express';
import bodyParser from 'body-parser';
import trainersRoutes from './routes/trainers.js';
import mongoose from 'mongoose';
import pokemonsRoutes from './routes/pokemons.js';

mongoose.connect('mongodb+srv://admin:admin@abdelillah.nclizho.mongodb.net/BackendWebApi?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(err => console.log(err));

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use('/pokemons', pokemonsRoutes);
app.use('/trainers', trainersRoutes);



app.listen(port, () => console.log(`Server running on port: http://localhost:${port}`));
