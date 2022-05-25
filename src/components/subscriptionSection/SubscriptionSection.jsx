import React from "react";
import {
  SubscriptionSectionTitleText,
  SubscriptionDescriptionText,
} from "../../configs/stringData";
import {
  StyleSubscriptionSection,
  SubscriptionDescription,
  SubscriptionSectionButton,
  SubscriptionSectionForm,
  SubscriptionSectionInput,
  SubscriptionSectionTitle,
} from "./StyleSubscriptionSection";

function SubscriptionSection() {
  return (
    <StyleSubscriptionSection>
      <SubscriptionSectionTitle>
        {SubscriptionSectionTitleText}
      </SubscriptionSectionTitle>
      <SubscriptionDescription>
        {SubscriptionDescriptionText}
      </SubscriptionDescription>
      <SubscriptionSectionForm>
        <SubscriptionSectionInput
          type="email"
          placeholder="Your email address"
        />
        <SubscriptionSectionButton type="button">
          Join
        </SubscriptionSectionButton>
      </SubscriptionSectionForm>
    </StyleSubscriptionSection>
  );
}

export default SubscriptionSection;
