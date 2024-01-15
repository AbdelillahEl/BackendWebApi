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
app.get('/', (req, res) => {
    // Respond with HTML containing information about CRUD endpoints and Pokemon logo
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <title>Welcome to Pokemon API</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                margin: 50px;
            }
    
            .logo {
                width: 150px;
                height: auto;
            }
    
            .info-container {
                margin-top: 20px;
            }
    
            .api-info {
                margin-top: 20px;
                font-size: 18px;
                list-style: none; /* This removes the bullet points from the list */
                padding: 0; /* Remove default padding */
            }
    
            .api-info li {
                margin-bottom: 10px; /* Add some space between list items */
            }
        </style>
    </head>
    
    <body>
        <h1>Welcome to Pokemon API</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg" alt="Pokemon Logo" class="logo">
        <div class="info-container">
            <p class="api-info">You can send CRUD requests to the following endpoints:</p>
            <ul class="api-info">
                
                <li>/trainers - CRUD operations for trainers</li>
                <ul class="api-info">
                <li>/trainers/:id - Get specific trainer</li>
                <li>/trainers/:id - Update specific trainer</li>
                <li>/trainers/:id - Delete specific trainer</li>
                </ul>
                <li>/pokemons - CRUD operations for pokemons</li>
                <ul class="api-info">
                <li>/pokemons/:id - Get specific pokemon</li>
                <li>/pokemons/:id - Update specific pokemon</li>
                <li>/pokemons/:id - Delete specific pokemon</li>
                </ul>
            </ul>
        </div>
    </body>
    
    </html>
    
    `);
});
app.use('/pokemons', pokemonsRoutes);
app.use('/trainers', trainersRoutes);



app.listen(port, () => console.log(`Server running on port: http://localhost:${port}`));
