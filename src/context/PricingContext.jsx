import React, { useState, useContext } from "react";
import axios from "axios";
import { useAppContext } from "./AppContext";

const PricingContext = React.createContext();

const PricingProvider = (props) => {
  const children = props.children;
  const [results, setResults] = React.useState([]);
  const [price, setPrice] = useState(0);
  const { pricingURL } = useAppContext();

  const getPricingResult = async (age, priorIncidents) => {
    //Make call and update price
    const url = pricingURL;

    const payload = {
      Age: parseInt(age),
      "Previous incidents?": priorIncidents,
    };
    try {
      const { data } = await axios.post(url, payload);
      setPrice(data.Base_Price);
      addPricingResult(age, priorIncidents, data.Base_Price);
    } catch (error) {
      console.log(error);
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
