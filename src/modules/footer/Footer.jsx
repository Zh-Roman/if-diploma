import React from "react";
import styled from "styled-components";
import {
  faFacebookSquare,
  faInstagram,
  faOdnoklassnikiSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubscriptionSection from "../../components/subscriptionSection/SubscriptionSection";
import FooterCard from "../../components/footerCard/FooterCard";
import {
  FooterCardContact,
  FooterCardCustomer,
  FooterCardTrack,
  FooterCardDelivery,
  FooterCardPayment,
  FooterCardReturn,
  FooterCardFAQ,
  FooterCardInfo,
  FooterCardGuide,
  FooterCardCareers,
  FooterCardGift,
  FooterCardAbout,
  FooterCardPolicies,
  FooterCardFollow,
  Instagram,
  FooterCardFacebook,
  FooterCardOdnoklassniki,
  FooterCardContactInfo,
  FooterCardEmail,
  FooterCardPhone,
  FooterCardAddress,
} from "../../configs/stringData";

const StyleFooter = styled.footer``;
const FooterCardContainer = styled.div`
  width: calc(var(--index) * 47);
  margin-top: calc(var(--index) * 2.634);
  display: flex;
  justify-content: space-between;
  align-items: start;
  @media screen and (max-width: 2168px) {
    width: 100%;
  }
  @media screen and (max-width: 851px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    & > div:last-child {
      border-bottom: calc(var(--index) * 0.044) dashed var(--light-gray);
    }
  }
`;

function Footer() {
  return (
    <StyleFooter className="_container">
      <SubscriptionSection />
      <FooterCardContainer>
        <FooterCard footerCardTitle={FooterCardCustomer}>
          <li> {FooterCardContact}</li>
          <li> {FooterCardTrack}</li>
          <li> {FooterCardDelivery}</li>
          <li> {FooterCardPayment}</li>
          <li> {FooterCardReturn}</li>
          <li> {FooterCardFAQ}</li>
        </FooterCard>
        <FooterCard footerCardTitle={FooterCardInfo}>
          <li> {FooterCardGift}</li>
          <li> {FooterCardGuide}</li>
          <li> {FooterCardCareers}</li>
          <li> {FooterCardAbout}</li>
          <li> {FooterCardPolicies}</li>
        </FooterCard>
        <FooterCard footerCardTitle={FooterCardFollow}>
          <li>
            <span>
              <FontAwesomeIcon icon={faFacebookSquare} />
            </span>{" "}
            {FooterCardFacebook}
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faOdnoklassnikiSquare} />
            </span>{" "}
            {FooterCardOdnoklassniki}
          </li>
          <li>
            {" "}
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>{" "}
            {Instagram}
          </li>
        </FooterCard>
        <FooterCard footerCardTitle={FooterCardContactInfo}>
          <p> {FooterCardEmail}</p>
          <p> {FooterCardPhone}</p>
          <p> {FooterCardAddress}</p>
        </FooterCard>
      </FooterCardContainer>
    </StyleFooter>
  );
}

export default Footer;
