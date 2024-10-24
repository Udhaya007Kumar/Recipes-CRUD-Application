import recipes from '../Models/recipeSchema.js'


//post method
export const createRecipes = async (req, res) => {
  try {
    const recepie = new recipes(req.body);
    await recepie.save();
    res
      .status(200)
      .json({ message: "Recepes Createded Susccsfully", data: recepie });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error in create Recipes" });
  }
};

//get methods
export const getrecipes = async (req, res) => {
  try {
    const getRecepies = await recipes.find();
    res
      .status(200)
      .json({ message: "All Recipes Get the View", data: getRecepies });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error in create Recipes" });
  }
};

    //getRecipeById

    export const getRecipeById = async (req, res) => {
      try {
        const recepieId = req.params.id;
        const Recipes = await recipes.findById(recepieId);
         if (!Recipes) {
          return res.status(404).json({ message: "Recipes Not Found" });
        }
        res
          .status(200)
          .json({ message: "Get By Single Recipes Data", data: Recipes });
      } catch (error) {
        res
          .status(500)
          .json({ message: "Internal server Error in create Recipes",message:error.message });
      }
    };

    //updateRecipe

    export const updateRecipe = async (req, res) => {
      try {
        const recepieId = req.params.id;
        const { name, procedure, ingredients, duration } = req.body;
        const result = await recipes.findByIdAndUpdate(
          { _id: recepieId },
          { name, procedure, ingredients, duration },
          {new:true},
        );
        if (result.matchedCount === 0) {
          return res.status(404).json({ message: "Recipes Not Found" });
        }
       
        res.status(200).json({ message: "Recepise updated...", data: result });
      } catch (error) {
        res
          .status(500)
          .json({
            message: "Internal server Error in create Recipes",
            message: error.message,
          });
      }
    };

    //deleteRecipe 
    export const deleteRecipe = async (req,res)=>{
      try {
        const recepieId = req.params.id;
        const result = await recipes.findByIdAndDelete({_id:recepieId}) 
        if(!result){
            return res.status(404).json({ message: "Recepie Not Found" });
        } 
        const recipes = await recipes.find();
        res.status(200).json({message:"Recipes deleted", data:recipes})
        
      } catch (error) {
        res
          .status(500)
          .json({
            message: "Internal server Error in create Recipes",
            message: error.message,
          });
        
      }
    }
