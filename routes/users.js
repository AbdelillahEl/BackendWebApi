import express from 'express';

const router = express.Router();
const users = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "age": 50,
        "eyeColor": "blue"
    },
    {
        "firstName": "John",
        "lastName": "Smith",
        "age": 20,
        "eyeColor": "red"
    }
]

router.get('/', (req, res) => {
    res.send(users);
    console.log(users);
});
export default router;
router.post('/', (req, res) => {
    console.log('POST ROUTE RECEIVED');
    res.send('POST ROUTE RECEIVED');
})