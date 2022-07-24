import styled from "styled-components";

export const BagSectionStyle = styled.section`
  padding-top: calc(var(--index) * 3.62);
  margin: 0 auto;
  width: calc(var(--index) * 23.18);
  @media screen and (max-width: 851px) {
    width: 100%;
  }
`;
export const BagTitleSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: calc(var(--index) * 0.44);
  width: 100%;

  & div,
  p {
    font-family: Helvetica55, sans-serif;
  }

  & p {
    font-size: calc(var(--index) * 0.878);
    line-height: calc(var(--index) * 1.05);
    color: var(--main-black);
    width: 100%;
    margin-top: calc(var(--index) * 2.2);
    text-align: center;
  }

  @media screen and (max-width: 851px) {
    margin: 0 auto;
    width: 95%;
    & p {
      font-size: calc(var(--index) * 0.7);
      line-height: calc(var(--index) * 0.79);
    }
  }
`;
export const BagTitle = styled.div`
  font-size: calc(var(--index) * 0.878);
  line-height: calc(var(--index) * 1.05);
  margin-right: calc(var(--index) * 0.878);
  color: var(--main-black);
`;
export const BagItemsAmount = styled.div`
  color: var(--gray);
  font-size: calc(var(--index) * 0.527);
  line-height: calc(var(--index) * 0.527);
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: calc(var(--index) * 1.756);
  margin-bottom: calc(var(--index) * 1.4);

  & div {
    font-weight: 700;
    font-size: calc(var(--index) * 0.878);
    line-height: calc(var(--index) * 1.05);
    color: var(--main-black);
  }

  @media screen and (max-width: 851px) {
    margin-top: calc(var(--index) * 0.878);
    margin-bottom: calc(var(--index) * 0.7);
  }
`;
export const BankCardTypeIconsContainer = styled.div`
  display: flex;
  width: fit-content;
  margin: calc(var(--index) * 0.878) auto 0;

  & svg:first-child {
    margin-right: calc(var(--index) * 0.22);
  }

  .bank_card_type_icon {
    height: calc(var(--index) * 1.05);
    width: calc(var(--index) * 1.756);
  }
`;
