import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { DoNotHaveAccount, NavMenuSignIn } from "../../configs/stringData";
import {
  AccountAvailability,
  AuthForm,
  AuthHeader,
  AuthIcon,
  AuthInput,
  AuthTitle,
  ErrorMessage,
  InputContainer,
  MainButtonStyle,
  StyleUserAuth,
} from "./StyleUserAuth";
import UserAuthContext from "../../context/UserAuthContext";

function Login() {
  const { setUserAuthData } = useContext(UserAuthContext);
  const navigateToHomePage = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [loginValues, setLoginValues] = useState({
    userEmail: "",
    password: "",
  });
  const handleChange = (e) => {
    setLoginValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const userAuth = (e) => {
    e.preventDefault();
    if (
      localStorage.getItem("userEmail") === loginValues.userEmail &&
      localStorage.getItem("pwd") === loginValues.password
    ) {
      setUserAuthData(loginValues);
      navigateToHomePage("/");
    } else {
      setErrMsg("Missing User Email or Password");
      setLoginValues({
        userEmail: "",
        password: "",
      });
    }
  };
  const disabledButton = !loginValues.userEmail || !loginValues.password;
  return (
    <StyleUserAuth>
      <AuthHeader>
        <AuthTitle>{NavMenuSignIn}</AuthTitle>
        <Link to="/">
          {" "}
          <FontAwesomeIcon icon={faXmark} />
        </Link>
      </AuthHeader>
      <AuthForm autoComplete="off" onSubmit={userAuth}>
        <ErrorMessage
          className={errMsg ? "err_msg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </ErrorMessage>
        <AuthInput
          type="email"
          placeholder="Email"
          name="userEmail"
          value={loginValues.userEmail}
          onChange={handleChange}
          required
        />
        <InputContainer>
          <AuthIcon
            role="presentation"
            className="show_pwd"
            onClick={() => setShowPassword(!showPassword)}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </AuthIcon>
          <AuthInput
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={loginValues.password}
            onChange={handleChange}
            required
          />
        </InputContainer>

        <MainButtonStyle
          disabledButton={disabledButton}
          disabled={disabledButton}
        >
          {NavMenuSignIn}
        </MainButtonStyle>
        <AccountAvailability>
          <Link to="/register">{DoNotHaveAccount}</Link>
        </AccountAvailability>
      </AuthForm>
    </StyleUserAuth>
  );
}

export default Login;
