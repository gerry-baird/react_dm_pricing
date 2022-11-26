import React, { useState, useContext } from "react";
import axios from "axios";

const PricingContext = React.createContext();

const PricingProvider = (props) => {
  const children = props.children;
  const [results, setResults] = React.useState([]);
  const [price, setPrice] = useState(0);

  const getPricingResult = async (age, priorIncidents) => {
    //Make call and update price
    const url = "http://localhost:8080/pricing";

    const payload = {
      Age: parseInt(age),
      "Previous incidents?": priorIncidents,
    };
    try {
      const { data } = await axios.post(url, payload);
      console.log("Price Updated");
      setPrice(data.Base_Price);
      addPricingResult(age, priorIncidents, data.Base_Price);
    } catch (error) {
      console.log(error.response);
    }
  };

  const addPricingResult = (age, prior, price) => {
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
    <PricingContext.Provider
      value={{
        results,
        setResults,
        reset,
        deleteResult,
        addPricingResult,
        getPricingResult,
        price,
        setPrice,
      }}
    >
      {children}
    </PricingContext.Provider>
  );
};

export const usePricingContext = () => {
  return useContext(PricingContext);
};

export { PricingProvider };
