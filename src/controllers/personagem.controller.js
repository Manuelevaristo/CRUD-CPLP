const personagensService = require('../services/personagem.service');

const findAllPersonagensController = (req, res) => {
  const personagens = personagensService.findAllPersonagensService();
  res.send(personagens);
};
const findByIdPersonagemController = (req, res) => {
  const parametroId = Number(req.params.id);
  const choosePersonagem =
    personagensService.findByIdPersonagemService(parametroId);
  res.send(choosePersonagem);
};

const createPersonagemController = (req, res) => {
  const personagem = req.body;
  const newPersonagem = personagensService.createPersonagemService(personagem);
  res.send(newPersonagem);
};

const updatePersonagemController = (req, res) => {
  const idParam = Number(req.params.id);
  const personagemEdit = req.body;
  const updatedPersonagem = personagensService.updatePersonagemService(
    idParam,
    personagemEdit,
  );
  res.send(updatedPersonagem);
};

const deletePersonagemController = (req, res) => {
  const idParam = req.params.id;
  personagensService.deletePersonagemService(idParam);
  res.send({ message: 'Personagem deletada com sucesso!' });
};

module.exports = {
  findAllPersonagensController,
  findByIdPersonagemController,
  createPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
};
