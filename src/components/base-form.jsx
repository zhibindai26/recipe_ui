import React from "react";

function SubmitButton() {
  return (
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link is-medium">Submit</button>
      </div>
    </div>
  );
}

function EmailAddress(props) {
  return (
    <div className="field">
      <label className="label is-medium">Email Address*</label>
      <div className="control">
        <input
          class="input is-medium"
          name="email_address"
          type="text"
          defaultValue={props.email_address}
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
}

function RecipeName(props) {
  return (
    <div className="field">
      <label className="label is-medium">Recipe Name</label>
      <div className="control">
        <input
          class="input is-medium"
          name="recipe_name"
          type="text"
          defaultValue={props.recipe_name}
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
}

function MealAndCuisine(props) {
  return (
    <div class="field is-horizontal">
      <div class="field-body">
        <div className="field">
          <label class="label is-medium">Meal Type</label>
          <div class="control">
            <input
              class="input is-medium"
              name="meal_type"
              type="text"
              list="meal_type"
              defaultValue={props.meal_type}
              onChange={props.handleMeal}
            />
            <datalist id="meal_type">
              {props.mt.map((meal, index) => (
                <option key={index}>{meal}</option>
              ))}
            </datalist>
          </div>
        </div>
        <div className="field">
          <label class="label is-medium">Cuisine</label>
          <div class="control">
            <input
              class="input is-medium"
              name="cuisine"
              type="text"
              list="cuisine"
              defaultValue={props.cuisine}
              onChange={props.handleCuisine}
            />
            <datalist id="cuisine">
              {props.mt.map((meal, index) => (
                <option key={index}>{meal}</option>
              ))}
            </datalist>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainIngredientAndSource(props) {
  return (
    <div class="field is-horizontal">
      <div class="field-body">
        <div className="field">
          <label class="label is-medium">Main Ingredient</label>
          <div class="control">
            <input
              class="input is-medium"
              name="main_ingredient"
              type="text"
              list="main_ingredient"
              defaultValue={props.main_ingredient}
              onChange={props.handleMainIngredient}
            />
            <datalist id="main_ingredient">
              {props.mt.map((ingredient, index) => (
                <option key={index}>{ingredient}</option>
              ))}
            </datalist>
          </div>
        </div>
        <div className="field">
          <label className="label is-medium">Source</label>
          <div className="control">
            <input
              class="input is-medium"
              name="source"
              type="text"
              list="source"
              defaultValue={props.source}
              onChange={props.handleSource}
            />
            <datalist id="source">
              {props.mt.map((source, index) => (
                <option key={index}>{source}</option>
              ))}
            </datalist>
          </div>
        </div>
      </div>
    </div>
  );
}

function Page(props) {
  return (
    <div className="field">
      <label className="label is-medium">Page</label>
      <div className="control">
        <input
          class="input is-medium"
          name="page"
          type="text"
          defaultValue={props.page}
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
}

function Link(props) {
  return (
    <div className="field">
      <label className="label is-medium">Link</label>
      <div className="control">
        <input
          class="input is-medium"
          name="link"
          type="text"
          defaultValue={props.link}
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
}

export {
  SubmitButton,
  EmailAddress,
  RecipeName,
  MealAndCuisine,
  MainIngredientAndSource,
  Page,
  Link,
};
