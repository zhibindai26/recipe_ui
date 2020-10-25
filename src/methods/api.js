function CallAPI(props) {
  const methodType = props.methodType;
  const headers = {
    "Content-Type": "application/json",
    "x-api-key": props.email_address + "Ls^t14%3",
  };
  const endpoint =
    "https://xi7r6spee6.execute-api.us-east-2.amazonaws.com/prod?";

  let requestBody = JSON.stringify({
    get_categories: props.get_categories,
    recipe: props.recipe_name,
    type: props.meal_type,
    main_ingredient: props.main_ingredient,
    cuisine: props.cuisine,
    source: props.source,
    sample: props.sample,
    page: props.page,
    link: props.link,
  });

  fetch(endpoint, {
    methodType,
    headers,
    requestBody,
  }).then((res) => {
    return res.json();
  });
}
