import React, { useContext } from "react";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
  MutedLink,
  BoldLink,
  FieldContainer,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { Formik, useFormik, yupToFormErrors } from "formik";
import * as yup from "yup";
import { FieldError } from "../../accountBox/common";

const PASSWORD_REGEX =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})";

const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const { switchToForgotten } = useContext(AccountContext);
  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  console.log("Error: ", formik.errors);
  return (
    <BoxContainer>
      <FormContainer onSubmit={Formik.handleSubmit}>
        <FieldContainer>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""}
          </FieldError>
        </FieldContainer>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#" onClick={switchToForgotten}>
        {" "}
        Password forgotten?
      </MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <formik>
        <SubmitButton
          type="submit"
          disabled={!formik.isValid}
          onSubmit={Formik.handleSubmit}
        >
          Login
        </SubmitButton>
      </formik>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Sign Up
        </BoldLink>{" "}
      </MutedLink>
    </BoxContainer>
  );
}
