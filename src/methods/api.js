async function callAPI(props) {
  const method = props.method_type;
  const headers = {
    "Content-Type": "application/json",
    // "X-Api-Key": props.email_address + "Ls^t14%3",
    "X-Api-Key": "youtiao--doufunao375",
  };
  const and = "&";
  const endpoint =
    "https://xi7r6spee6.execute-api.us-east-2.amazonaws.com/prod?";
  const getCategories = `get_categories=${props.get_categories}${and}`;
  const recipe = `recipe=${props.recipe_name}${and}`;
  const type = `type=${props.meal_type}${and}`;
  const mainIngredient = `main_ingredient=${props.main_ingredient}${and}`;
  const cuisine = `cuisine=${props.cuisine}${and}`;
  const source = `source=${props.source}${and}`;
  const page = `page=${props.page}${and}`;
  const link = `link=${props.link}${and}`;
  const sample = `sample=${props.sample}`;

  const url =
    endpoint +
    getCategories +
    recipe +
    type +
    mainIngredient +
    cuisine +
    source +
    page +
    link +
    sample;

  try {
    const response = await fetch(url, { method: method, headers: headers });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error during API request", err);
  }
}

export default callAPI;
