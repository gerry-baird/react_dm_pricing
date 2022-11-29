import React, { useState, useContext } from "react";
import axios from "axios";
import { useAppContext } from "./AppContext";

const LoanContext = React.createContext();

const LoanProvider = ({ children }) => {
  const [results, setResults] = React.useState([]);
  const [loanResult, setLoanResult] = React.useState({});
  const { loanURL } = useAppContext();

  const getLoanResult = async (payload) => {
    const url = loanURL;
    console.log("Using loan url " + url);
    try {
      let response = await axios.post(url, payload, {
        Accept: "application/json",
        "Content-Type": "application/json",
      });
      //setPrice(data.Base_Price);
      //addPricingResult(age, priorIncidents, data.Base_Price);
      setLoanResult(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <LoanContext.Provider
      value={{
        getLoanResult,
        loanResult,
      }}
    >
      {children}
    </LoanContext.Provider>
  );
};

export const useLoanContext = () => {
  return useContext(LoanContext);
};

export { LoanProvider };
