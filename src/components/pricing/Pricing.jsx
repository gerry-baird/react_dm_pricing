import React from "react";
import PricingForm from "./PricingForm";
import PricingResults from "./PricingResults";

const Pricing = () => {
  const [results, setResults] = React.useState([]);

  const handlePricingResult = (age, prior, price) => {
    const currentTime = new Date().toLocaleTimeString();
    const result = { age, prior, price, currentTime };

    //add the new result into a copy of the existing ressults
    let newResults = [...results];
    newResults.unshift(result);
    setResults(newResults);

    console.log(result);
  };

  const deleteResult = (index) => {
    let newResults = [...results];
    newResults.splice(index, 1);
    setResults(newResults);
  };

  const reset = () => {
    setResults([]);
  };
  return (
    <>
      <PricingForm handlePricingResult={handlePricingResult} />
      <PricingResults results={results} deleteResult={deleteResult} />
    </>
  );
};

export default Pricing;
