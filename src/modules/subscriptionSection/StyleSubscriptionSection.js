import styled from "styled-components";

export const StyleSubscriptionSection = styled.div`
  text-align: center;
  color: var(--main-black);
`;
export const SubscriptionSectionTitle = styled.div`
  text-transform: uppercase;
  font-size: calc(var(--index) * 0.7);
  line-height: calc(var(--index) * 1.05);
  margin-bottom: calc(var(--index) * 0.7);
`;
export const SubscriptionDescription = styled.div`
  font-size: calc(var(--index) * 0.527);
  line-height: calc(var(--index) * 0.527);
  margin-bottom: calc(var(--index) * 1.756);
`;
export const SubscriptionSectionForm = styled.form`
  position: relative;
  margin: 0 auto;
  width: calc(var(--index) * 17.56);
  border-bottom: calc(var(--index) * 0.044) solid var(--light-gray);
  @media screen and (max-width: 851px) {
    width: 100%;
  }
  .offscreen {
    position: absolute;
    left: -9999px;
  }
`;
export const SubscriptionSectionInput = styled.input`
  font-size: calc(var(--index) * 0.7);
  line-height: calc(var(--index) * 1.05);
  width: calc(100% - (var(--index) * 1.7));
  border: none;
`;
export const SubscriptionSectionButton = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  background-color: var(--main-white);
  font-size: calc(var(--index) * 0.7);
  line-height: calc(var(--index) * 1.05);
  border: none;
  color: var(--main-black);
`;
