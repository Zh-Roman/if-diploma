import React from "react";
import styled from "styled-components";
import Register from "../components/userAuth/Register";

const StyleRegisterPage = styled.section`
  background-color: var(--gray);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function RegisterPage() {
  return (
    <StyleRegisterPage>
      <Register />
    </StyleRegisterPage>
  );
}

export default RegisterPage;
