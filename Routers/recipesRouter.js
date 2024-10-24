import express from 'express';
import { createRecipes, deleteRecipe, getRecipeById, getrecipes, updateRecipe } from '../Controllers/recipesController.js';




const router = express.Router()

router.post("/create",createRecipes);
router.get("/getrecipes",getrecipes);
router.get("/getrecipes/:id",getRecipeById)
router.put("/updaterecipes/:id",updateRecipe)
router.delete("/delete/:id",deleteRecipe)





export default router;