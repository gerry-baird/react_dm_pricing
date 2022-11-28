import React, { useState, useContext } from "react";
import axios from "axios";
import { useAppContext } from "./AppContext";

const LoanContext = React.createContext();

const LoanProvider = ({ children }) => {
  const { loanURL } = useAppContext();

  const getLoanResult = async () => {
    const url = loanURL;
  };

  return (
    <LoanContext.Provider
      value={{
        getLoanResult,
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
