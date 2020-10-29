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
        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  return (
    <div className="field is-grouped">
      <div className="control">
        <button className="button is-link is-medium">Submit</button>
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
              {props.mt.map((i, index) => (
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
              {props.mt.map((i, index) => (
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
                {props.mt.map((i, index) => (
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
                {props.mt.map((i, index) => (
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

export {
  Login,
  SubmitButton,
  TextInputField,
  InputAndListField,
  InputAndListFieldReadOnly,
  Sample,
};
