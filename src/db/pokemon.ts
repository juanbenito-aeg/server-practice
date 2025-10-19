import Pokemon from "../models/pokemon-model.ts";

async function getAllPokemon() {
  const allPokemon = await Pokemon.find();
  return allPokemon;
}

async function createPokemon(newPokemon) {
  const pokemonToCreate = new Pokemon(newPokemon);
  const createdPokemon = await pokemonToCreate.save();
  return createdPokemon;
}

async function updatePokemon(fieldToFilterBy, changes) {
  const updatedPokemon = await Pokemon.findOneAndUpdate(
    fieldToFilterBy,
    changes,
    { new: true }
  );
  return updatedPokemon;
}

export default {
  getAllPokemon,
  createPokemon,
  updatePokemon,
};
