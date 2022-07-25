import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const RefForScrollContext = createContext({});

export function RefProviderContext({ children }) {
  const [refForShopSection, setRefForShopSection] = useState(false);
  const [refForSaleSection, setRefForSaleSection] = useState(false);
  const [refForSearchSection, setRefForSearchSection] = useState(false);
  return (
    <RefForScrollContext.Provider
      value={{
        refForShopSection,
        setRefForShopSection,
        refForSaleSection,
        setRefForSaleSection,
        refForSearchSection,
        setRefForSearchSection,
      }}
    >
      {children}
    </RefForScrollContext.Provider>
  );
}

RefProviderContext.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};
export default RefForScrollContext;
