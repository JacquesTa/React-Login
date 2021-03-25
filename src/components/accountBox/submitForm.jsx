import React, { useState } from "react";
import Signup from "./Signup";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>{!isSubmitted ? <Signup submitForm={submitForm} /> : <FormSuccess />}</>
  );
};

export default Form;
