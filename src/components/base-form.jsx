import React from "react";
import { Hero } from "./basic-page";

function Login(props) {
  return (
    <div className="container">
      <Hero title="Please Enter Your Email Address" />
      <form onSubmit={props.handleLogin}>
        <TextInputField
          fieldName="Email Address*"
          name="email_address"
          defaultValue={props.email_address}
          handleChange={props.handleChange}
        />
        <FormError formError={props.loginError} />
        <Button buttonMsg="Submit" />
      </form>
    </div>
  );
}

function Button(props) {
  return (
    <div className="field is-grouped">
      <div className="control">
        <button className="button is-link is-medium">{props.buttonMsg}</button>
      </div>
    </div>
  );
}

function ReloadButton(props) {
  return (
    <div className="field is-grouped">
      <div className="control">
        <button onClick={props.refreshPg} className="button is-link is-medium">
          {props.buttonMsg}
        </button>
      </div>
    </div>
  );
}

function FormError(props) {
  return (
    <div className="container">
      <h1 className="subtitle is-4 has-text-danger">{props.formError}</h1>
      <p></p>
    </div>
  );
}

function TextInputField(props) {
  return (
    <div className="field">
      <label className="label is-medium">{props.fieldName}</label>
      <div className="control">
        <input
          className="input is-medium"
          name={props.name}
          type="text"
          defaultValue={props.defaultValue}
          onChange={props.handleChange}
        />
        <FormError formError={props.formError} />
      </div>
    </div>
  );
}

function InputAndListField(props) {
  return (
    <div className="field is-horizontal">
      <div className="field-body">
        <div className="field">
          <label className="label is-medium">{props.firstFieldName}</label>
          <div className="control">
            <input
              className="input is-medium"
              name={props.firstName}
              type="text"
              list={props.firstName}
              defaultValue={props.firstField}
              onChange={props.handleFirstField}
            />
            <datalist id={props.firstName}>
              {props.catOne.map((i, index) => (
                <option key={index}>{i}</option>
              ))}
            </datalist>
            <FormError formError={props.formErrorOne} />
          </div>
        </div>
        <div className="field">
          <label className="label is-medium">{props.secondFieldName}</label>
          <div className="control">
            <input
              className="input is-medium"
              name={props.secondName}
              type="text"
              list={props.secondName}
              defaultValue={props.secondField}
              onChange={props.handleSecondField}
            />
            <datalist id={props.secondName}>
              {props.catTwo.map((i, index) => (
                <option key={index}>{i}</option>
              ))}
            </datalist>
            <FormError formError={props.formErrorTwo} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SingleInputAndListField(props) {
  return (
    <div className="field is-horizontal">
      <div className="field-body">
        <div className="field">
          <label className="label is-medium">{props.fieldName}</label>
          <div className="control">
            <input
              className="input is-medium"
              name={props.name}
              type="text"
              list={props.name}
              defaultValue={props.field}
              onChange={props.handleField}
            />
            <datalist id={props.name}>
              {props.cat.map((i, index) => (
                <option key={index}>{i}</option>
              ))}
            </datalist>
          </div>
        </div>
      </div>
    </div>
  );
}

function SingleInputAndListFieldReadOnly(props) {
  return (
    <div className="field is-horizontal">
      <div className="field-body">
        <div className="field">
          <label className="label is-medium">{props.fieldName}</label>
          <div className="control">
            <div className="select" name={props.name}>
              <select
                name={props.name}
                defaultValue={props.field}
                onChange={props.handleField}
              >
                {props.cat.map((i, index) => (
                  <option key={index}>{i}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputAndListFieldReadOnly(props) {
  return (
    <div className="field is-horizontal">
      <div className="field-body">
        <div className="field">
          <label className="label is-medium">{props.firstFieldName}</label>
          <div className="control">
            <div className="select" name={props.firstName}>
              <select
                name={props.firstName}
                defaultValue={props.firstField}
                onChange={props.handleFirstField}
              >
                {props.catOne.map((i, index) => (
                  <option key={index}>{i}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label is-medium">{props.secondFieldName}</label>
          <div className="control">
            <div className="select" name={props.secondName}>
              <select
                name={props.secondName}
                defaultValue={props.secondField}
                onChange={props.handleSecondField}
              >
                {props.catTwo.map((i, index) => (
                  <option key={index}>{i}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sample(props) {
  return (
    <div className="field">
      <label className="label is-medium">Number of Recipes to Return</label>
      <div className="control">
        <div className="select" name="sample">
          <select
            name="sample"
            defaultValue={props.sample}
            onChange={props.handleSample}
          >
            {Array.from({ length: 10 }, (value, index) => (
              <option key={index}>{index + 1}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

function TextBox(props) {
  return (
    <div className="field">
      <label className="label is-medium">{props.fieldName}</label>
      <div className="control">
        <input
          className="input is-large"
          name={props.name}
          type="text"
          defaultValue={props.defaultValue}
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
}

function RecipeDisplay(props) {
  let source = props.Page
    ? `Source: ${props.Source} - P. ${props.Page}`
    : `Source: ${props.Source}`;

  let link = props.Link ? (
    <a href={props.Link} target="_blank" rel="noopener noreferrer">
      LINK
    </a>
  ) : null;

  let notes = props.Notes ? `Notes: ${props.Notes}` : null;

  return (
    <div className="block">
      <div className="card">
        <div className="card-content">
          <p className="title is-4">
            {props.Index}: {props.Recipe}
          </p>
          <p className="subtitle is-6">Type: {props.Type}</p>
          <p className="subtitle is-6">Cuisine: {props.Cuisine}</p>
          <p className="subtitle is-6">
            Main Ingredient: {props.Main_Ingredient}
          </p>
          <p className="subtitle is-6">Uploader: {props.Uploader}</p>
          <p className="subtitle is-6">{source}</p>
          <p className="subtitle is-6">{link}</p>
          <p className="subtitle is-6">{notes}</p>
        </div>
      </div>
    </div>
  );
}

export {
  Login,
  Button,
  ReloadButton,
  TextInputField,
  InputAndListField,
  InputAndListFieldReadOnly,
  Sample,
  RecipeDisplay,
  SingleInputAndListField,
  SingleInputAndListFieldReadOnly,
  TextBox,
};
