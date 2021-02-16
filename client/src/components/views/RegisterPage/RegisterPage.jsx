import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { registerUser } from "_action/user_action";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegisterPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{ email: "", name: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          password: Yup.string()
            .min(8, "Must be 8 characters or more")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(registerUser(values)).then((res) => {
            if (res.payload.success) {
              history.push("/login");
            } else {
              alert("Error");
            }
            setSubmitting(false);
          });
        }}
      >
        <Form>
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="text" />
          <ErrorMessage name="password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <Link to="/">Home</Link>
    </>
  );
};

export default RegisterPage;
