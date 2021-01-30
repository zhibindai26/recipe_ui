const get = "GET";
const post = "POST";

const reloadFindRecipesState = {
  recipe_name: "",
  meal_type: "",
  cuisine: "",
  main_ingredient: "",
  uploader: "",
  source: "",
  sample: 1,
  recipes: "",
  loading: false,
  isSubmitted: false,
  responseCode: "",
  responseMessage: "",
};

const reloadAddRecipeState = {
  recipe: "",
  type: "",
  cuisine: "",
  main_ingredient: "",
  uploader: "",
  source: "",
  page: "",
  link: "",
  notes: "",
  loading: false,
  message: "",
};

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
  reloadFindRecipesState,
  reloadAddRecipeState,
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
