import styled from "styled-components";

export const StyleUserAuth = styled.section`
  position: relative;
  background-color: var(--main-white);
  padding: calc(var(--index) * 1.756);
  color: var(--main-black);
  width: calc(var(--index) * 21.86);
  height: fit-content;

  .offscreen {
    position: absolute;
    left: -9999px;
  }

  .show_pwd {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: var(green);
  }

  @media screen and (max-width: 851px) {
    width: 100vw;
    padding: calc(var(--index) * 1.756) calc(var(--index) * 0.878);
  }
`;
export const InputContainer = styled.span`
  position: relative;

  .hide {
    display: none;
  }

  .valid {
    color: green;
    height: calc(var(--index) * 0.527);
    width: calc(var(--index) * 0.527);
    position: absolute;
    left: calc(var(--index) * -0.7);
    transform: translateY(50%);

    & svg {
      width: 100%;
      height: 100%;
    }
  }

  .invalid {
    color: red;
    height: calc(var(--index) * 0.527);
    width: calc(var(--index) * 0.527);
    position: absolute;
    left: calc(var(--index) * -0.7);
    transform: translateY(50%);

    & svg {
      width: 100%;
      height: 100%;
    }
  }

  .show_pwd {
    cursor: pointer;
    color: var(--gray);
    height: calc(var(--index) * 0.527);
    width: calc(var(--index) * 0.527);
    position: absolute;
    right: calc(var(--index) * -0.527);
    transform: translate(-100%, 50%);

    & svg {
      width: 100%;
      height: 100%;
    }
  }
`;
export const AuthInstructions = styled.p`
  position: absolute;
  z-index: 10;
  top: calc(var(--index) * 1.35);
  width: 100%;
  padding: calc(var(--index) * 0.08);
  font-size: calc(var(--index) * 0.527);
  line-height: calc(var(--index) * 0.7);
  border-radius: calc(var(--index) * 0.175);
  background: var(--light-gray);
  color: var(--gray);

  & > svg {
    margin-right: calc(var(--index) * 0.08);
  }
`;
export const SuccessWindow = styled.div`
  padding: calc(var(--index) * 1.4);
  display: block;
  text-align: center;

  & a {
    text-decoration: underline;
    font-family: Helvetica55, sans-serif;
    color: var(--main-black);
    font-size: calc(var(--index) * 0.79);
    line-height: calc(var(--index) * 1.05);
  }
`;
export const AuthIcon = styled.span``;
export const AuthHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: calc(var(--index) * 2.2);

  & * {
    font-family: Helvetica45, sans-serif;
    font-size: calc(var(--index) * 0.7);
    line-height: calc(var(--index) * 1.05);
  }

  & svg {
    font-size: calc(var(--index) * 0.8);
    color: var(--main-black);
  }
`;
export const AuthTitle = styled.h3`
  text-transform: uppercase;
  font-size: calc(var(--index) * 0.7);
  line-height: calc(var(--index) * 1.05);
`;
export const AuthForm = styled.form`
  padding: 0 calc(var(--index) * 0.4);
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const AuthInput = styled.input`
  color: var(--main-black);
  margin-bottom: calc(var(--index) * 1.317);
  padding-bottom: calc(var(--index) * 0.44);
  width: 100%;
  font-family: Helvetica45, sans-serif;
  font-size: calc(var(--index) * 0.7);
  line-height: calc(var(--index) * 1.05);
  border: none;
  border-bottom: calc(var(--index) * 0.044) solid var(--light-gray);
`;
export const AuthCheckbox = styled.input`
  height: calc(var(--index) * 0.7);
  width: calc(var(--index) * 0.7);
`;
export const AuthCheckBoxLabel = styled.label`
  position: relative;
  padding-left: calc(var(--index) * 0.44);
  left: calc(var(--index) * 0.7);
  transform: translateY(-75%);
  white-space: pre-line;
  font-family: Helvetica45, sans-serif;
  font-size: calc(var(--index) * 0.527);
  line-height: calc(var(--index) * 0.79);
  @media screen and (max-width: 851px) {
    font-size: calc(var(--index) * 0.48);
  }
`;
export const SignUpAgreement = styled.p`
  font-family: Helvetica45, sans-serif;
  font-size: calc(var(--index) * 0.527);
  line-height: calc(var(--index) * 0.79);
  color: var(--gray);
  margin-top: calc(var(--index) * -0.878);
  margin-bottom: calc(var(--index) * 1.317);
  @media screen and (max-width: 851px) {
    margin-top: calc(var(--index) * -0.66);
  }

  & a {
    color: var(--main-black);
    text-decoration: underline;
  }
`;
export const ErrorMessage = styled.p`
  font-family: Helvetica55, sans-serif;
  text-align: center;
  color: var(--main-red);
  font-size: calc(var(--index) * 0.527);

  .err_msg {
    color: var(--main-red);
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
export const MainButtonStyle = styled.button`
  cursor: pointer;
  display: block;
  margin: 0 auto;
  height: calc(var(--index) * 2.2);
  width: calc(var(--index) * 10.5);
  border: none;
  background-color: ${(props) =>
    props.disabledButton ? "var(--gray)" : "var(--main-black)"};
  color: ${(props) =>
    props.disabledButton ? "var(--light-gray)" : "var(--main-white)"};
  text-transform: uppercase;
  font-family: Helvetica45, sans-serif;
  font-size: calc(var(--index) * 0.7);
  line-height: calc(var(--index) * 0.7);
`;
export const AccountAvailability = styled.div`
  margin-top: calc(var(--index) * 1.317);
  @media screen and (max-width: 851px) {
    margin-top: calc(var(--index) * 1.756);
  }

  & a {
    color: var(--main-black);
    text-transform: uppercase;
    text-decoration: underline;
    font-size: calc(var(--index) * 0.527);
    line-height: calc(var(--index) * 0.527);
  }
`;
