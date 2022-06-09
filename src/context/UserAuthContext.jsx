import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const UserAuthContext = createContext({});

export function AuthProviderContext({ children }) {
  const [userAuthData, setUserAuthData] = useState("");
  return (
    <UserAuthContext.Provider value={{ userAuthData, setUserAuthData }}>
      {children}
    </UserAuthContext.Provider>
  );
}

AuthProviderContext.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};
export default UserAuthContext;
