import React, { useContext } from "react";
import axios from "axios";
import { useAppContext } from "./AppContext";

const LoanContext = React.createContext();

const LoanProvider = ({ children }) => {
  const [results, setResults] = React.useState([]);
  const [loanResult, setLoanResult] = React.useState({});
  const { loanURL } = useAppContext();

  const deleteResult = (index) => {
    let newResults = [...results];
    newResults.splice(index, 1);
    setResults(newResults);
  };

  const getLoanResult = async (payload) => {
    const url = loanURL;
    console.log("Using loan url " + url);
    try {
      let { data } = await axios.post(url, payload, {
        Accept: "application/json",
        "Content-Type": "application/json",
      });

      //Update state
      setLoanResult(data);
      //Add the latest result to the results array, also add the request payload
      addLoanResult(payload, data);
    } catch (error) {
      console.log(error);
    }
  };

  const addLoanResult = (payload, data) => {
    const currentTime = new Date().toLocaleTimeString();

    const payloadEmpty = Object.keys(payload).length === 0;
    const dataEmpty = Object.keys(data).length === 0;
    if (!dataEmpty && !payloadEmpty) {
      console.log("Loan Result being created.");
      const payment = data["Loan payment"].toFixed(2);
      const loanAmount = data["Loan amount"];
      const affordability = data["Affordability category"];
      const preQualify = data["Loan-PreQualification"];
      const housing = data["Housing expense"].toFixed(2);
      const loanRate = payload["Loan rate pct"];
      const purchasePrice = payload["Purchase price"];
      const creditScore = payload["Credit Score"];
      const downPayment = payload["Down payment"];
      const monthlyIncome = payload["Monthly income"];

      const result = {
        loanRate,
        purchasePrice,
        creditScore,
        downPayment,
        monthlyIncome,
        payment,
        loanAmount,
        affordability,
        preQualify,
        housing,
        currentTime,
      };
      //add the new result into a copy of the existing ressults
      let newResults = [...results];
      newResults.unshift(result);
      setResults(newResults);
    }
  };
  return (
    <LoanContext.Provider
      value={{
        getLoanResult,
        loanResult,
        deleteResult,
        results,
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
