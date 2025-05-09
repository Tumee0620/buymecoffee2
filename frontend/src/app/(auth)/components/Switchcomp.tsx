"use client";
import { useState } from "react";
import { SignupPage } from "./Signup";
import { Sipass } from "./Sipass";

export const Switchcomp = () => {
  const [step, setStep] = useState(0);

  return (
    <div>{step == 0 ? <SignupPage setStep1={setStep} /> : <Sipass />}</div>
  );
};
