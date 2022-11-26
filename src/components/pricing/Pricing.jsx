import React from "react";
import { PricingProvider } from "../../context/PricingContext";
import PricingForm from "./PricingForm";
import PricingResults from "./PricingResults";

const Pricing = () => {
  return (
    <PricingProvider>
      <PricingForm />
      <PricingResults />
    </PricingProvider>
  );
};

export default Pricing;
