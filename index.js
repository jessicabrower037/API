const express = require('express');
const app = express();

app.use(express.json());

const majors = [{
    id: 1,
    majors: 'Computer Science'
},
{
     id: 2,
    majors: 'Marketing'
},
{
     id: 3,
    majors: 'Data Analytics'
},
{
     id: 4,
    majors: 'Nursing'
},
{
     id: 5,
    majors: 'Business'
},
{
     id: 6,
    majors: 'Public Relations & Advertising'
},
{
     id: 7,
    majors: 'Accounting'
},
{
     id: 8,
    majors: 'Psychology'
},
{
     id: 9,
    majors: 'Criminal Justice'
},
{
     id: 10,
    majors: 'Cinema & Film'
},
{
    id: 11,
    majors: 'Cybersecurity'

}];

app.get('/api/majors', (req, res)=> {
    res.send(majors);
});

app.post('/api/movies', (req,res)=> {
    const mymajor = {
        id: majors.length + 1,
        movie: req.body.major
        
    }
    majors.push(mymovie);
    res.send(mymovie);
})
const port = process.env.port || 6001;
app.listen(port,()=> console.log('Listening on port ${port}'));
