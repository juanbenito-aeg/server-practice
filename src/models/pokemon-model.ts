import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema(
  {
    active: Boolean,
    name: String,
    base_experience: Number,
  },
  { collection: "pokemon" }
);

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

export default Pokemon;
