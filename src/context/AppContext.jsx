import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const DEFAULT_PRICING_URL = "http://localhost:8080/pricing";
const DEFAULT_LOAN_URL = "http://localhost:8080/Loan-PreQualification";

const AppProvider = (props) => {
  const children = props.children;

  //Add app settings here
  const [pricingURL, setPricingURL] = useState(DEFAULT_PRICING_URL);
  const [loanURL, setLoanURL] = useState(DEFAULT_LOAN_URL);

  const getDefaultPricingURL = () => {
    return DEFAULT_PRICING_URL;
  };

  const getDefaultLoanURL = () => {
    return DEFAULT_LOAN_URL;
  };

  return (
    <AppContext.Provider
      value={{
        pricingURL,
        setPricingURL,
        getDefaultPricingURL,
        loanURL,
        setLoanURL,
        getDefaultLoanURL,
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
