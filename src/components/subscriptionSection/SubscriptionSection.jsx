import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
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
import { AuthInstructions } from "../userAuth/StyleUserAuth";
import {
  getEmailToSubscription,
  userSubscriptionRequested,
} from "../../ducks/userSubscription/actions";
import { subscriptionStatusSelector } from "../../ducks/userSubscription/selectors";

function SubscriptionSection() {
  const dispatch = useDispatch();
  const subscriptionStatus = useSelector(subscriptionStatusSelector);
  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/;
  const [userEmail, setUserEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  useEffect(() => {
    const result = EMAIL_REGEX.test(userEmail);
    setValidEmail(result);
    if (validEmail) {
      const emailObj = {
        email: userEmail,
      };
      dispatch(getEmailToSubscription(emailObj));
    }
  }, [userEmail, validEmail]);
  const handleUserSubClick = (e) => {
    e.preventDefault();
    if (validEmail) {
      dispatch(userSubscriptionRequested());
    }
  };
  return (
    <StyleSubscriptionSection>
      {subscriptionStatus ? (
        <SubscriptionSectionTitle>
          {subscriptionStatus.message}
        </SubscriptionSectionTitle>
      ) : (
        <>
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
              autoComplete="off"
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="email_note"
              required
            />
            <AuthInstructions
              id="email_note"
              className={userEmail && !validEmail ? null : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              You should use real email.
            </AuthInstructions>
            <SubscriptionSectionButton
              type="button"
              onClick={handleUserSubClick}
            >
              Join
            </SubscriptionSectionButton>
          </SubscriptionSectionForm>
        </>
      )}
    </StyleSubscriptionSection>
  );
}

export default SubscriptionSection;
