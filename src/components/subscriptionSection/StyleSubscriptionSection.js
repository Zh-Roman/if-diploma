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
  margin: 0 auto;
  width: calc(var(--index) * 17.56);
  border-bottom: 2px solid var(--light-gray);
`;
export const SubscriptionSectionInput = styled.input`
  font-size: calc(var(--index) * 0.7);
  line-height: calc(var(--index) * 1.05);
  width: calc(100% - (var(--index) * 1.7));
  border: none;
`;
export const SubscriptionSectionButton = styled.button`
  text-transform: uppercase;
  background-color: var(--main-white);
  font-size: calc(var(--index) * 0.7);
  line-height: calc(var(--index) * 1.05);
  border: none;
`;
