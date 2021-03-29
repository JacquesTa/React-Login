import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useFormik, yupToFormErrors } from "formik";
import * as yup from "yup";

const PASSWORD_REGEX =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})";

const validationSchema = yup.object({
  fullName: yup
    .string()
    .min(3, "Enter your real name")
    .required("Full Name is required!"),
  address: yup.string().required("Enter a valid Address"),
  number: yup.string().required("Enter a valid number"),
  email: yup.string().email("Enter a valid email address").required(),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, "Please enter a strong password")
    .required(),
  password2: yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf([yup.ref("password")], "Password does not match"),
  }),
});
export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      number: "",
      email: "",
      password: "",
      password2: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  console.log("Error: ", formik.errors);

  return (
    <BoxContainer>
      <FormContainer onSubmit={formik.handleSubmit}>
        <FieldContainer>
          <Input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.fullName && formik.errors.fullName
              ? formik.errors.fullName
              : ""}
          </FieldError>
        </FieldContainer>

        <FieldContainer>
          <Input
            name="address"
            type="address"
            placeholder="Address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.address && formik.errors.address
              ? formik.errors.address
              : ""}
          </FieldError>
        </FieldContainer>

        <FieldContainer>
          <Input
            name="number"
            type="number"
            placeholder="Number"
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.number && formik.errors.number
              ? formik.errors.number
              : ""}
          </FieldError>
        </FieldContainer>

        <FieldContainer>
          <Input
            name="email"
            type="email"
            placeholder="Email"
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
            name="password"
            type="password"
            placeholder="Password"
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

        <FieldContainer>
          <Input
            name="password2"
            type="password"
            placeholder="Confirm Password"
            value={formik.values.password2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.password2 && formik.errors.password2
              ? formik.errors.password2
              : ""}
          </FieldError>
        </FieldContainer>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit">Signup</SubmitButton>
      </FormContainer>

      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
