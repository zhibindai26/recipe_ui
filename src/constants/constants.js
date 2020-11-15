const getCategoriesParams = {
  method_type: "GET",
  sample: 1,
  get_categories: "true",
};

const getRecipesParams = {
  method_type: "GET",
  recipe_name: "",
  meal_type: "",
  cuisine: "",
  main_ingredient: "",
  source: "",
  loading: true,
};

export { getCategoriesParams, getRecipesParams };
