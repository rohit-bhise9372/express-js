const express = require("express");
const app = express();

const { initializeDatabase } = require("./db/db.connect");
const Recipe = require("./model/recipe.models");
// Connect Database
initializeDatabase();

// Middleware
app.use(express.json());

// 3,4,5 Create recipe

async function createRecipe(newRecipe) {
  try {
    const recipe = new Recipe(newRecipe);
    return await recipe.save();
  } catch (error) {
    throw error;
  }
}

app.post("/recipes", async (req, res) => {
  try {
    const savedRecipe = await createRecipe(req.body);

    res.status(201).json({
      message: "Recipe added successfully.",
      recipe: savedRecipe,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to add recipe.",
    });
  }
});

//6 Get All Recipes
async function readAllRecipes() {
  try {
    return await Recipe.find();
  } catch (error) {
    throw error;
  }
}

app.get("/recipes", async (req, res) => {
  try {
    const recipes = await readAllRecipes();

    if (recipes.length !== 0) {
      res.json(recipes);
    } else {
      res.status(404).json({ error: "No recipes found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes." });
  }
});

//7 Get Recipe by Title
async function readRecipeByTitle(recipeTitle) {
  try {
    return await Recipe.findOne({ title: recipeTitle });
  } catch (error) {
    throw error;
  }
}

app.get("/recipes/:recipeTitle", async (req, res) => {
  try {
    const recipe = await readRecipeByTitle(req.params.recipeTitle);

    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ error: "Recipe not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipe." });
  }
});

//8 Get Recipes by Author
async function readRecipesByAuthor(authorName) {
  try {
    return await Recipe.find({ author: authorName });
  } catch (error) {
    throw error;
  }
}

app.get("/recipes/author/:authorName", async (req, res) => {
  try {
    const recipes = await readRecipesByAuthor(req.params.authorName);

    if (recipes.length !== 0) {
      res.json(recipes);
    } else {
      res.status(404).json({ error: "No recipes found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes." });
  }
});

//9 Get Easy Recipes
async function readEasyRecipes() {
  try {
    return await Recipe.find({ difficulty: "Easy" });
  } catch (error) {
    throw error;
  }
}

app.get("/recipes/difficulty/easy", async (req, res) => {
  try {
    const recipes = await readEasyRecipes();

    if (recipes.length !== 0) {
      res.json(recipes);
    } else {
      res.status(404).json({ error: "No recipes found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes." });
  }
});


// 10. Update Difficulty by ID
async function updateRecipeById(recipeId, dataToUpdate) {
  try {
    return await Recipe.findByIdAndUpdate(recipeId, dataToUpdate, {
      new: true,
    });
  } catch (error) {
    throw error;
  }
}

app.post("/recipes/:recipeId", async (req, res) => {
  try {
    const updatedRecipe = await updateRecipeById(
      req.params.recipeId,
      req.body
    );

    if (updatedRecipe) {
      res.status(200).json({
        message: "Recipe updated successfully.",
        recipe: updatedRecipe,
      });
    } else {
      res.status(404).json({ error: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update recipe." });
  }
});


//11. Update Prep & Cook Time by Title
async function updateRecipeByTitle(recipeTitle, dataToUpdate) {
  try {
    return await Recipe.findOneAndUpdate(
      { title: recipeTitle },
      dataToUpdate,
      { new: true }
    );
  } catch (error) {
    throw error;
  }
}

app.post("/recipes/title/:recipeTitle", async (req, res) => {
  try {
    const updatedRecipe = await updateRecipeByTitle(
      req.params.recipeTitle,
      req.body
    );

    if (updatedRecipe) {
      res.status(200).json({
        message: "Recipe updated successfully.",
        recipe: updatedRecipe,
      });
    } else {
      res.status(404).json({ error: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update recipe." });
  }
});


// 12. Delete Recipe by ID

async function deleteRecipeById(recipeId) {
  try {
    return await Recipe.findByIdAndDelete(recipeId);
  } catch (error) {
    throw error;
  }
}

app.delete("/recipes/:recipeId", async (req, res) => {
  try {
    const deletedRecipe = await deleteRecipeById(req.params.recipeId);

    if (deletedRecipe) {
      res.status(200).json({
        message: "Recipe deleted successfully.",
      });
    } else {
      res.status(404).json({
        error: "Recipe not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Failed to delete recipe.",
    });
  }
});


// Start Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




 

 
