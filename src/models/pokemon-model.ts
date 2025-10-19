import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema(
  {
    active: Boolean,
    name: { type: String, unique: true },
    base_experience: Number,
  },
  { collection: "pokemon" }
);

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

export default Pokemon;
