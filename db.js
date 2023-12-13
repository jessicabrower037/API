const express = require('express');
const app = express();

app.use(express.json());

const albums = [{
    id: 1,
    album: 'Currents'
},
{
    id: 2, 
    album: 'The Slow Rush'
},
{
    id: 3,
    album: 'Nurture'
},
{
    id: 4,
    album: 'Worlds'
},
{

}];

//get all albums
app.get('/api/albums', (_req, res)=> {
    res.send(movies);
});

//config
const port = process.env.port || 8080
app.listen(port,()=> console.log('Listening on port ${port}'));
