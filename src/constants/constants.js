const get = "GET";
const post = "POST";

const getCategoriesParams = {
  method_type: get,
  sample: 1,
  get_categories: "true",
};

const homeTitle = "Recipe App!";
const homeSubtitle =
  "Find recipes, add a new recipe, or look through the recipe database";

const findRecipeTitle = "Find Existing Recipes";
const findRecipeSubtitle =
  "Get a random set of recipes based on search criteria";

const addRecipeTitle = "Add a New Recipe to the Recipe Database";
const addRecipeSubtitle =
  "For most fields, you can enter something new, or select from an exiting option";

const allRecipeTitle = "All Recipes";
const allRecipeSubtitle = "Filter and look through the entire recipe database";

export {
  get,
  post,
  getCategoriesParams,
  homeTitle,
  homeSubtitle,
  findRecipeTitle,
  findRecipeSubtitle,
  addRecipeTitle,
  addRecipeSubtitle,
  allRecipeTitle,
  allRecipeSubtitle,
};
