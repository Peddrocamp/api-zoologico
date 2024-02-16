import express from 'express';
import cors from 'cors';
import { Zoologico } from './model/Zoologico';
import { Atracao } from './model/Atracao';
import { Habitat } from './model/Habitat';

const server = express();
const port = 3000;

server.use(express.json());
server.use(cors());

server.get('/', (req,res) =>{
 res.json('Olá mundo!!');
})

server.post('/habitat', (req, res) => {
    const { nome, animais } = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json('Habitat criado');
});

server.post('/atracao', (req, res) => {
    const { nome, habitat } = req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(atracao);
    res.status(200).json('Atração criada');
});

server.post('/zoologico', (req, res) => {
    const { nome, atracao } = req.body;
    const zoo = new Zoologico(nome, atracao);
    console.log(zoo);
    res.status(200).json('Zoológico criado');
});

 server.listen(port, ()  => {  
 console.log('Servidor rodando em http://localhost:${port}');
 })