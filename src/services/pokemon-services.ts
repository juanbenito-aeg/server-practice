import Pokemon from "../db/pokemon.ts";

async function getAllPokemon() {
  const allPokemon = await Pokemon.getAllPokemon();
  return allPokemon;
}

async function createPokemon(newPokemon) {
  const createdPokemon = await Pokemon.createPokemon(newPokemon);
  return createdPokemon;
}

// async function updatePokemon(name, changes) {
//   const pokemonToUpdate = await Pokemon.getPokemon({ name });

//   if (pokemonToUpdate.active === false) {
//     changes = { ...changes, active: true };
//   }

//   const updatedPokemon = await Pokemon.updatePokemon({ name }, changes);
//   return updatedPokemon;
// }

export default { getAllPokemon, createPokemon };
