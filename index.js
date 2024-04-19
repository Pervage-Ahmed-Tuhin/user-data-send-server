const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');

//middle ware

app.use(cors());

app.use(express.json());
// This is must or else the data will be undefined



const users = [
    { id: 1, name: 'Tuhin', email: 'Tuhin@gmail.com' },
    { id: 2, name: 'opu', email: 'opu@gmail.com' },
    { id: 3, name: 'dip', email: 'dip@gmail.com' }
]

app.get('/', (req, res) => {
    res.send('Users Management server is running');
})




app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log('post api hitting ');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`The server is running on prot ${port}`);
})