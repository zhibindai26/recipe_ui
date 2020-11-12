async function callAPI(props) {
  const methodType = props.methodType;
  const headers = {
    "Content-Type": "application/json",
    "X-Api-Key": props.email_address + "Ls^t14%3",
  };
  const and = "&";
  const endpoint =
    "https://xi7r6spee6.execute-api.us-east-2.amazonaws.com/prod?";
  const getCategories = `get_categories=${props.get_categories}${and}`;
  const recipe = `recipe=${props.recipe_name}${and}`;
  const type = `type=${props.meal_type}${and}`;
  const main_ingredient = `main_ingredient=${props.main_ingredient}${and}`;
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
    main_ingredient +
    cuisine +
    source +
    page +
    link +
    sample;

  try {
    const response = await fetch(url, { methodType, headers });
    const data = await response.json();
    return data.body;
  } catch (err) {
    console.error("Error during API request", err);
  }
}

async function getData(props) {
  const data = await callAPI(props);
  return data.Recipes;
}

export { getData };
