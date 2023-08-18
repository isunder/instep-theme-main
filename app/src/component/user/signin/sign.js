import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../Redux/action/loginAction";

const SignIn = () => {
  const dispatch = useDispatch();

  // const data = useSelector((state) => state?.logindatacheck?.listdata);
  // console.log(data, "dataforcheck");

  const validates = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  const onSubmit = (values, res) => {
    dispatch(loginAction(values)).then((response) => {
      Token = response;
      console.log(Token, "tokenes");
      localStorage.setItem("token", JSON.stringify(Token));
      console.log(values, "token");
      window.location.reload();
    });
  };

  let Token;

  return (
    <>
      <Form
        onSubmit={onSubmit}
        validate={validates}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="email">
              {({ input, meta }) => (
                <div>
                  <label>Username</label>
                  <input {...input} type="text" placeholder="Username" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <div>
                  <label>Password</label>
                  <input {...input} type="password" placeholder="Password" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Submit
              </button>
            </div>
          </form>
        )}
      />
    </>
  );
};

export default SignIn;
