const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/ranking_pelada', { useNewUrlParser: true, useUnifiedTopology: true });

const playerSchema = new mongoose.Schema({
    nome: String,
    gols: Number,
    assistencias: Number,
    pontos: Number
});

const Player = mongoose.model('Player', playerSchema);

app.use(bodyParser.json());
app.use(express.static('public'));

// Rotas
app.post('/api/jogadores', async (req, res) => {
    const { nome } = req.body;
    const newPlayer = new Player({ nome, gols: 0, assistencias: 0, pontos: 0 });
    await newPlayer.save();
    res.json(newPlayer);
});

app.get('/api/jogadores', async (req, res) => {
    const players = await Player.find();
    res.json(players);
});

app.post('/api/partidas', async (req, res) => {
    const { jogador, gols, assistencias } = req.body;
    const player = await Player.findOne({ nome: jogador });
    if (player) {
        player.gols += parseInt(gols);
        player.assistencias += parseInt(assistencias);
        player.pontos += parseInt(gols) + parseInt(assistencias);
        await player.save();
        res.json(player);
    } else {
        res.status(404).json({ message: 'Jogador não encontrado' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
