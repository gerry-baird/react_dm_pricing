import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const DEFAULT_PRICING_URL = "http://localhost:8080/pricing";

const AppProvider = (props) => {
  const children = props.children;

  //Add app settings here
  const [pricingURL, setPricingURL] = useState(DEFAULT_PRICING_URL);

  const getDefaultPricingURL = () => {
    return DEFAULT_PRICING_URL;
  };

  return (
    <AppContext.Provider
      value={{
        pricingURL,
        setPricingURL,
        getDefaultPricingURL,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
