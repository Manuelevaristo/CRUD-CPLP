const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

const personagens = [
  {
    id: 1,
    nome: 'Matthew Lyn Lillard',
    personagem: 'Shaggy',
    foto: 'https://br.web.img2.acsta.net/c_310_420/pictures/19/06/25/20/05/4707243.jpg',
    idade: 52,
    nacionalidade: 'Americano',
    carreira: 26,
  },
  {
    id: 2,
    nome: 'Frederick James Prinze Jr',
    personagem: 'Fred',
    foto: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/93/73/05/20273851.jpg',
    idade: 46,
    nacionalidade: 'Americano',
    carreira: 25,
  },
  {
    id: 3,
    nome: 'SARAH MICHELLE GELLAR',
    personagem: 'Daphne',
    foto: 'https://br.web.img3.acsta.net/c_310_420/pictures/20/02/19/16/51/3067552.jpg',
    idade: 44,
    nacionalidade: 'Americana',
    carreira: 34,
  },
  {
    id: 4,
    nome: 'Linda Edna Cardellini',
    personagem: 'Velma',
    foto: 'https://br.web.img3.acsta.net/c_310_420/pictures/17/07/12/16/12/353727.jpg',
    idade: 46,
    nacionalidade: 'Americana',
    carreira: 24,
  },
  {
    id: 5,
    nome: 'Rowan Sebastian Atkinson',
    personagem: 'Mondavarious',
    foto: 'https://br.web.img3.acsta.net/c_310_420/pictures/18/08/08/18/29/0662098.jpg',
    idade: 67,
    nacionalidade: 'Britânico',
    carreira: 35,
  },
  {
    id: 6,
    nome: 'Isla Lang Fisher',
    personagem: 'Mary jane',
    foto: 'https://br.web.img3.acsta.net/c_310_420/pictures/18/08/14/15/10/5584779.jpg',
    idade: 46,
    nacionalidade: 'Australiana, Omanense',
    carreira: 31,
  },
  {
    id: 7,
    nome: 'Steven Grives',
    personagem: 'N`Goo Tuana',
    foto: 'https://br.web.img2.acsta.net/c_310_420/pictures/15/05/04/20/31/401904.jpg',
    idade: 71,
    nacionalidade: 'Britânico',
    carreira: 21,
  },
  {
    id: 8,
    nome: 'Miguel A. Núñez Jr',
    personagem: 'Voodoo Maestro',
    foto: 'https://images.moviefit.me/p/o/6974-miguel-a-nunez-jr.jpg',
    idade: 31,
    nacionalidade: 'Americano',
    carreira: 57,
  },
];

app.get('/personagens/todas-personagens', (req, res) => {
  res.send(personagens);
});
app.get('/personagens/personagem/:id', (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaPersonagem = personagens.find(
    (personagem) => personagem.id === parametroId,
  );
  res.send(escolhaPersonagem);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
