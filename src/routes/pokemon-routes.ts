import express from "express";
import PokemonControllers from "../controllers/pokemon-controllers.ts";

const router = express.Router();

router.get("/", PokemonControllers.getAllPokemon);
router.post("/", PokemonControllers.createPokemon);

export default router;
