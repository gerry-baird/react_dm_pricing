import * as React from "react";
import MyAppBar from "./components/MyAppBar";
import Sidebar from "./components/Sidebar";
import Pricing from "./components/Pricing";
import { Box, Stack } from "@mui/material";
import Rightbar from "./components/Rightbar";

function App() {
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

  return (
    <Box>
      <MyAppBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Pricing handlePricingResult={handlePricingResult} />
        <Rightbar results={results} deleteResult={deleteResult} />
      </Stack>
    </Box>
  );
}

export default App;
