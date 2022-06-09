import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCheck,
  faTimes,
  faInfoCircle,
  faEyeSlash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  CreateAccount,
  PrivacyPolicy,
  RegisterCheckbox,
  TermsOfService,
  NavMenuSignUp,
  HaveAccount,
  NavMenuSignIn,
} from "../../configs/stringData";
import {
  AccountAvailability,
  AuthCheckbox,
  AuthCheckBoxLabel,
  AuthForm,
  AuthHeader,
  AuthIcon,
  AuthInput,
  AuthInstructions,
  AuthTitle,
  InputContainer,
  MainButtonStyle,
  SignUpAgreement,
  StyleUserAuth,
  SuccessWindow,
} from "./StyleUserAuth";

const USER_REGEX = /^[a-zA-Z][a-zA-Z-]{1,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/;

function Register() {
  const [userFirstName, setUserFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);

  const [userLastName, setUserLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);

  const [success, setSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const result = USER_REGEX.test(userFirstName);
    setValidFirstName(result);
  }, [userFirstName]);

  useEffect(() => {
    const result = USER_REGEX.test(userLastName);
    setValidLastName(result);
  }, [userLastName]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(userEmail);
    setValidEmail(result);
  }, [userEmail]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  const disabledButton =
    !validFirstName ||
    !validLastName ||
    !validEmail ||
    !validPwd ||
    !validMatch;

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("pwd", pwd);
    setSuccess(true);
  };
  return (
    <>
      {success ? (
        <StyleUserAuth>
          <SuccessWindow>
            <AuthTitle>Success!</AuthTitle>
            <Link to="/login">{NavMenuSignIn}</Link>
          </SuccessWindow>
        </StyleUserAuth>
      ) : (
        <StyleUserAuth>
          <AuthHeader>
            <AuthTitle>{CreateAccount}</AuthTitle>
            <Link to="/">
              {" "}
              <FontAwesomeIcon icon={faXmark} />
            </Link>
          </AuthHeader>
          <AuthForm onSubmit={handleSubmit}>
            <InputContainer>
              <AuthIcon className={validFirstName ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </AuthIcon>
              <AuthIcon
                className={
                  validFirstName || !userFirstName ? "hide" : "invalid"
                }
              >
                <FontAwesomeIcon icon={faTimes} />
              </AuthIcon>
              <AuthInput
                type="text"
                placeholder="First Name"
                autoComplete="off"
                onChange={(e) => setUserFirstName(e.target.value)}
                value={userFirstName}
                aria-invalid={validFirstName ? "false" : "true"}
                aria-describedby="uid_note"
                required
              />
              <AuthInstructions
                id="uid_note"
                className={
                  userFirstName && !validFirstName ? null : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                2 to 24 characters.
                <br />
                Must begin with a letter. Letters and hyphens allowed.
              </AuthInstructions>
            </InputContainer>
            <InputContainer>
              <AuthIcon className={validLastName ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </AuthIcon>
              <AuthIcon
                className={validLastName || !userLastName ? "hide" : "invalid"}
              >
                <FontAwesomeIcon icon={faTimes} />
              </AuthIcon>
              <AuthInput
                type="text"
                placeholder="Last Name"
                autoComplete="off"
                onChange={(e) => setUserLastName(e.target.value)}
                value={userLastName}
                aria-invalid={validLastName ? "false" : "true"}
                aria-describedby="uid_note"
                required
              />
              <AuthInstructions
                id="uid_note"
                className={userLastName && !validLastName ? null : "offscreen"}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                2 to 24 characters.
                <br />
                Must begin with a letter. Letters and hyphens allowed.
              </AuthInstructions>
            </InputContainer>
            <InputContainer>
              <AuthIcon className={validEmail ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </AuthIcon>
              <AuthIcon
                className={validEmail || !userEmail ? "hide" : "invalid"}
              >
                <FontAwesomeIcon icon={faTimes} />
              </AuthIcon>
              <AuthInput
                type="email"
                placeholder="Email"
                autoComplete="off"
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="email_note"
                required
              />
              <AuthInstructions
                id="email_note"
                className={userEmail && !validEmail ? null : "offscreen"}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                You should use real email.
              </AuthInstructions>
            </InputContainer>
            <InputContainer>
              <AuthIcon className={validPwd ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </AuthIcon>
              <AuthIcon className={validPwd || !pwd ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </AuthIcon>
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
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwd_note"
                required
              />
              <AuthInstructions
                id="pwd_note"
                className={pwd && !validPwd ? null : "offscreen"}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.
                <br />
                Must includes uppercase and lowercase letters, a number and a
                special character. <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>
                <span aria-label="percent">%</span>
              </AuthInstructions>
            </InputContainer>
            <InputContainer>
              <AuthIcon className={validMatch && matchPwd ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </AuthIcon>
              <AuthIcon
                className={validMatch || !matchPwd ? "hide" : "invalid"}
              >
                <FontAwesomeIcon icon={faTimes} />
              </AuthIcon>
              <AuthIcon
                role="presentation"
                className="show_pwd"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </AuthIcon>
              <AuthInput
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirm_note"
                required
              />
              <AuthInstructions
                id="confirm_note"
                className={matchPwd && !validMatch ? null : "offscreen"}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </AuthInstructions>
            </InputContainer>

            <AuthCheckbox id="authCheckbox" type="checkbox" />
            <AuthCheckBoxLabel htmlFor="authCheckbox">
              {RegisterCheckbox}
            </AuthCheckBoxLabel>
            <SignUpAgreement>
              By signing up you agree to <Link to="/">{TermsOfService}</Link>{" "}
              and <Link to="/">{PrivacyPolicy}</Link>
            </SignUpAgreement>
            <MainButtonStyle
              disabledButton={disabledButton}
              disabled={disabledButton}
            >
              {NavMenuSignUp}
            </MainButtonStyle>
            <AccountAvailability>
              <Link to="/login">{HaveAccount}</Link>
            </AccountAvailability>
          </AuthForm>
        </StyleUserAuth>
      )}
    </>
  );
}

export default Register;
