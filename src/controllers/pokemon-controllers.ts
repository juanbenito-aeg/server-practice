import PokemonServices from "../services/pokemon-services.ts";

async function getAllPokemon(req, res) {
  const allPokemon = await PokemonServices.getAllPokemon();
  res.send(allPokemon);
}

async function createPokemon(req, res) {
  const newPokemon = req.body;
  const createdPokemon = await PokemonServices.createPokemon(newPokemon);
  res.status(201).send(createdPokemon);
}

async function updatePokemon(req, res) {
  // const { name } = req.params;
  // const changes = req.body;
  // const updatedPokemon = await PokemonServices.updatePokemon(name, changes);
  // res.send(updatedPokemon);
}

export default { getAllPokemon, createPokemon };
