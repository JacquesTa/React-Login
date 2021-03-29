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

export function ForgottenForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton type="submit">Send</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Remember your Password?{" "}
        <BoldLink href="#" onClick={switchToSignin}>
          Sign In
        </BoldLink>{" "}
      </MutedLink>
    </BoxContainer>
  );
}
