import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { DoNotHaveAccount, NavMenuSignIn } from "../../configs/stringData";
import {
  AccountAvailability,
  AuthForm,
  AuthHeader,
  AuthInput,
  AuthTitle,
  MainButtonStyle,
  StyleUserAuth,
} from "./StyleUserAuth";

function Login() {
  return (
    <StyleUserAuth>
      <AuthHeader>
        <AuthTitle>{NavMenuSignIn}</AuthTitle>
        <Link to="/">
          {" "}
          <FontAwesomeIcon icon={faXmark} />
        </Link>
      </AuthHeader>
      <AuthForm>
        <AuthInput type="email" placeholder="Email" />
        <AuthInput type="password" placeholder="Password" />
        <MainButtonStyle>{NavMenuSignIn}</MainButtonStyle>
        <AccountAvailability>
          <Link to="/register">{DoNotHaveAccount}</Link>
        </AccountAvailability>
      </AuthForm>
    </StyleUserAuth>
  );
}

export default Login;
