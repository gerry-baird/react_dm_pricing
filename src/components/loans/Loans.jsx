import React from "react";

import { LoanProvider } from "../../context/LoanContext";
import LoanForm from "./LoanForm";
import LoanResults from "./LoanResults";

const Loans = () => {
  return (
    <LoanProvider>
      <LoanForm />
      <LoanResults />
    </LoanProvider>
  );
};

export default Loans;
