import React, { useContext } from "react";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
  MutedLink,
  BoldLink,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import useForm from "./useForm";
import validate from "./validInfo";

export function SignupForm({ submitForm }) {
  const { switchToSignin } = useContext(AccountContext);

  const { handleChange, values, handleSubmit, errors } = useForm(
    validate,
    submitForm
  );

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          id="Fullname"
          type="text"
          placeholder="Full Name"
          value={values.fullname}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.fullname}</p>}
        <Input
          id="address"
          type="text"
          placeholder="Address"
          name="address"
          value={values.address}
          onChange={handleChange}
        />
        {errors.address && <p>{errors.address}</p>}
        <Input
          id="number"
          type="number"
          placeholder="Phone Number"
          name="number"
          value={values.number}
          onChange={handleChange}
        />
        {errors.number && <p>{errors.number}</p>}
        <Input
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <Input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <Input
          id="password2"
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={values.password2}
          onChange={handleChange}
        />
        {errors.password2 && <p>{errors.password2}</p>}
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton type="submit">SignUp</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?{" "}
        <BoldLink href="#" onClick={switchToSignin}>
          Sign In
        </BoldLink>{" "}
      </MutedLink>
    </BoxContainer>
  );
}
