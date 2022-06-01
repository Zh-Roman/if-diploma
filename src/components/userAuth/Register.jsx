import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  CreateAccount,
  PrivacyPolicy,
  RegisterCheckbox,
  TermsOfService,
  NavMenuSignUp,
  HaveAccount,
} from "../../configs/stringData";
import {
  AccountAvailability,
  AuthCheckbox,
  AuthCheckBoxLabel,
  AuthForm,
  AuthHeader,
  AuthInput,
  AuthTitle,
  MainButtonStyle,
  SignUpAgreement,
  StyleUserAuth,
} from "./StyleUserAuth";

function Register() {
  return (
    <StyleUserAuth>
      <AuthHeader>
        <AuthTitle>{CreateAccount}</AuthTitle>
        <Link to="/">
          {" "}
          <FontAwesomeIcon icon={faXmark} />
        </Link>
      </AuthHeader>
      <AuthForm>
        <AuthInput type="text" placeholder="First Name" />
        <AuthInput type="text" placeholder="Last Name" />
        <AuthInput type="email" placeholder="Email" />
        <AuthInput type="password" placeholder="Password" />
        <AuthCheckbox id="authCheckbox" type="checkbox" />
        <AuthCheckBoxLabel htmlFor="authCheckbox">
          {RegisterCheckbox}
        </AuthCheckBoxLabel>
        <SignUpAgreement>
          By signing up you agree to <Link to="/">{TermsOfService}</Link> and{" "}
          <Link to="/">{PrivacyPolicy}</Link>
        </SignUpAgreement>
        <MainButtonStyle>{NavMenuSignUp}</MainButtonStyle>
        <AccountAvailability>
          <Link to="/login">{HaveAccount}</Link>
        </AccountAvailability>
      </AuthForm>
    </StyleUserAuth>
  );
}

export default Register;
