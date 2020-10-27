const initialState = {
  login: false,
  loginError: "",
  email_address: "",
  recipe_name: "",
  meal_type: "",
  cuisine: "",
  main_ingredient: "",
  source: "",
  page: "",
  link: "",
  sample: 1,
};

function validate(value) {
  if (!value) {
    this.setState({ loginError: "Invalid Login" });
    return false;
  }
  return true;
}

export { initialState, validate };
