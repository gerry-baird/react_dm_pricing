import React from "react";
import { PricingContextProvider } from "./PricingContextProvider";
import PricingForm from "./PricingForm";
import PricingResults from "./PricingResults";

const Pricing = () => {
  return (
    <PricingContextProvider>
      <PricingForm />
      <PricingResults />
    </PricingContextProvider>
  );
};

export default Pricing;
