const express = require ('express')
const app = express 
const port = 3000
const pgp = require('pg-promise')//* options */)
const db = pgp ('postgres://postgres:postgres@localhost:5433/cronogramas')


//codigo hugo sincronizaçao de maquinas 

['11:34, 08/04/2024'] +55 (62) [8432-8860] 
const IP_1 = '172.16.221.204'
const PORT_1 = 3000
const SERVER_1 = [IP_1,PORT_1].join(':');

var server1 = require('axios').create({
  baseURL: 'http://' + SERVER_1
})

['11:34, 08/04/2024'] +55 (62) [8432-8860] 
const IP_2 = `172.16.221.33`
const PORT_2 = 3030
const SERVER_2 = [IP_2,PORT_2].join(':');

const IP_3 = `172.16.222.233`
const PORT_3 = 3001
const SERVER_3 = [IP_3,PORT_3].join(':');

const IP_4 = `172.16.221.55`
const PORT_4 = 3000
const SERVER_4 = [IP_4,PORT_4].join(':');

const IP_5 = `172.16.221.155`
const PORT_5 = 3090
const SERVER_5 = [IP_5,PORT_5].join(':');

['11:45, 08/04/2024'] +55(62) [8432-8860]
app.get('/aulas', async (req, res) => {
  try {
    const { data } = await server1.get('/aulas')
    console.log(data)
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
})


app.get('/authors', (req, res) => {
    res.send('Hugo | Eu')
  })
 
app.get('/pessoas', (req, res) => {
})

app.get('/pessoas/:id', (req, res) => {
})

app.post('/pessoas', (req, res) => {
  let data = req.body; // {nome: Ismael , email: ismaelfranca17@gmail.com}

app.put('/competencias', function (req, res) {
  res.send('Got a PUT request at /user');
});

app.delete('/competencias', function (req, res) {
  res.send('Got a DELETE request at /user');
});


app.get('/aulas', async (req, res) => {
    try {
      const { data } = await server1.get('/aulas')
      console.log(data)
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
 })

app.get('/competencias , async') (req, res) = {
    try 
      const:{ data } = await server1.get('/competencias')
      (console).log(competencias)
      res.json(competencias)
    }catch (error) {
      console.error('Error fetching competencias:', error);
      res.status(500).json({ error: 'Failed to fetch competencias'});
    }
  })


