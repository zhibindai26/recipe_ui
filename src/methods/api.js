async function callAPI(props) {
  const method = props.method_type;
  const headers = {
    "Content-Type": "application/json",
    "X-Api-Key": props.email_address + "Ls^t14%3",
  };
  const endpoint =
    "https://xi7r6spee6.execute-api.us-east-2.amazonaws.com/prod?";

  try {
    if (method === "GET") {
      const url = createGETUrl(props);
      const response = await fetch(endpoint + url, {
        method: method,
        headers: headers,
      });
      const data = await response.json();
      return data;
    } else if (method === "POST") {
      let body = props;
      delete body.method_type;
      delete body.email_address;
      const response = await fetch(endpoint, {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.error("Error during API request", err);
  }
}

function createGETUrl(props) {
  const and = "&";
  const getCategories = `get_categories=${props.get_categories}${and}`;
  const recipe = `recipe=${props.recipe_name}${and}`;
  const type = `type=${props.meal_type}${and}`;
  const mainIngredient = `main_ingredient=${props.main_ingredient}${and}`;
  const uploader = `uploader=${props.uploader}${and}`;
  const cuisine = `cuisine=${props.cuisine}${and}`;
  const source = `source=${props.source}${and}`;
  const page = `page=${props.page}${and}`;
  const link = `link=${props.link}${and}`;
  const sample = `sample=${props.sample}`;

  const url =
    getCategories +
    recipe +
    type +
    mainIngredient +
    uploader +
    cuisine +
    source +
    page +
    link +
    sample;

  return url;
}

export default callAPI;
