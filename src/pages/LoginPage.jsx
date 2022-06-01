import React from "react";
import styled from "styled-components";
import Login from "../components/userAuth/Login";

const StyleLoginPage = styled.section`
  background-color: var(--gray);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function LoginPage() {
  return (
    <StyleLoginPage>
      <Login />
    </StyleLoginPage>
  );
}

export default LoginPage;
