function CallAPI(props) {
  const methodType = props.methodType;
  const headers = {
    "Content-Type": "application/json",
    "X-Api-Key": props.email_address + "Ls^t14%3",
  };
  const and = "&";
  const url = "https://xi7r6spee6.execute-api.us-east-2.amazonaws.com/prod?";
  const getCategories = `get_categories=${props.get_categories}${and}`;
  const recipe = `recipe=${props.recipe_name}${and}`;
  const type = `type=${props.meal_type}${and}`;
  const main_ingredient = `main_ingredient=${props.main_ingredient}${and}`;
  const cuisine = `cuisine=${props.cuisine}${and}`;
  const source = `source=${props.source}${and}`;
  const page = `page=${props.page}${and}`;
  const link = `link=${props.link}${and}`;
  const sample = `sample=${props.sample}`;

  const endpoint =
    url +
    getCategories +
    recipe +
    type +
    main_ingredient +
    cuisine +
    source +
    page +
    link +
    sample;

  fetch(endpoint, {
    methodType,
    headers,
  })
    .then((res) => {
      res.json();
    })
    .then((data) => {
      return data;
    });
}

export default CallAPI;
