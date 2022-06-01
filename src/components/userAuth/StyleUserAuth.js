import styled from "styled-components";

export const StyleUserAuth = styled.section`
  background-color: var(--main-white);
  padding: calc(var(--index) * 1.756);
  color: var(--main-black);
  width: calc(var(--index) * 21.86);
  height: fit-content;

  @media screen and (max-width: 851px) {
    width: 100vw;
    padding: calc(var(--index) * 1.756) calc(var(--index) * 0.878);
  }
`;
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
export const MainButtonStyle = styled.button`
  margin: 0 auto;
  height: calc(var(--index) * 2.2);
  width: calc(var(--index) * 10.5);
  border: none;
  background-color: var(--main-black);
  color: var(--main-white);
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
