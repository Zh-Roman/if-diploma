import styled from "styled-components";

export const StyleProductDetails = styled.div`
  display: flex;
  cursor: pointer;
`;
export const DetailsSection = styled.div`
  margin-left: calc(var(--index) * 0.7);
  margin-bottom: calc(var(--index) * 0.79);

  & > div {
    font-family: Helvetica45, sans-serif;
    font-size: calc(var(--index) * 0.527);
  }
`;

export const DetailsTitle = styled.div`
  text-transform: uppercase;
  color: var(--main-black);
  line-height: calc(var(--index) * 0.527);
`;
export const DetailsBody = styled.div`
  margin: calc(var(--index) * 0.878) 0;
  color: var(--gray);
  line-height: calc(var(--index) * 0.79);
  text-align: justify;
  white-space: pre-line;
`;
