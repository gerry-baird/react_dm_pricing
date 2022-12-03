import React, { useEffect, useState } from "react";
import { useLoanContext } from "../../context/LoanContext";

import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Unstable_Grid2";

const LoanForm = () => {
  //local state for form inputs and their defaults
  const [rate, setRate] = useState(2.5);
  const [price, setPrice] = useState(120000);
  const [creditScore, setCreditScore] = useState(800);
  const [downPayment, setDownPayment] = useState(10000);
  const [monthlyIncome, setMonthlyIncome] = useState(3000);

  //local state for loan pre-qualification results
  const [loanPayment, setLoanPayment] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [affordability, setAffordability] = useState("N/A");
  const [preQualification, setPrequalification] = useState("N/A");
  const [housing, setHousing] = useState(0);
  const [errors, setErrors] = useState({});

  //state & functions from LoanContext
  const { getLoanResult, loanResult } = useLoanContext();

  //This function is called when the loanResult varible in the LoanContext is updated.
  useEffect(() => {
    const isEmpty = Object.keys(loanResult).length === 0;
    if (!isEmpty) {
      console.log("Loan Result updated.");
      setLoanPayment(loanResult["Loan payment"].toFixed(2));
      setLoanAmount(loanResult["Loan amount"]);
      setAffordability(loanResult["Affordability category"]);
      setPrequalification(loanResult["Loan-PreQualification"]);
      setHousing(loanResult["Housing expense"].toFixed(2));
    }
  }, [loanResult]);

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  //form validation
  const validate = () => {
    //reset errors
    let temp = {};

    //check rate
    if (!isNumeric(rate) || rate < 0.01 || rate > 50) {
      temp.rate = "Rate must be between 0.01 and 50";
    }

    //check purchase price
    if (!isNumeric(price) || price < 1000 || price > 20000000) {
      temp.price = "Purchase price between 1000 and 20m";
    }

    //check down payment
    if (!isNumeric(downPayment) || downPayment < 1) {
      temp.downPayment = "Downpayment required";
    }

    //check credit score
    if (!isNumeric(creditScore) || creditScore < 1 || creditScore > 1000) {
      temp.creditScore = "Credit score between 1-1000";
    }

    //check income
    if (!isNumeric(monthlyIncome) || monthlyIncome < 1) {
      temp.monthlyIncome = "Monthly icome required";
    }

    setErrors({ ...temp });

    //check every element in temp, to decide if validaiton was passed
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    if (validate()) {
      //create an object to hold all the data from the form
      const payload = {
        "Loan rate pct": parseFloat(rate),
        "Purchase price": parseInt(price),
        "Credit Score": parseInt(creditScore),
        "Down payment": parseInt(downPayment),
        "Monthly income": parseInt(monthlyIncome),
      };

      //We don't get a payload back, this is handled asychronously
      //through usEffect hook. The hook will be called when the data
      //is updated.
      getLoanResult(payload);
    }
  };

  //Set the background colour of the results area based on the
  //prequalificatio result
  let resultMood = "#EBF5FB";
  if (preQualification === "Likely approved") resultMood = "#ABEBC6";
  if (preQualification === "Possibly approved") resultMood = "#F0B27A";
  if (preQualification === "Likely disapproved") resultMood = "#E74C3C";

  return (
    <Box flex={8} p={2}>
      <Paper sx={{ ml: 2, p: 4 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h6" gutterBottom>
              Loan Details
            </Typography>
          </Grid>
          <Grid xs={6}>
            <FormGroup>
              <FormControlLabel control={<Switch />} label="Dynamic" />
            </FormGroup>
          </Grid>
          <Grid xs={6}>
            <TextField
              label="Loan Rate %"
              name="rate"
              variant="outlined"
              value={rate}
              fullWidth
              sx={{ mt: 1, mb: 1 }}
              onChange={(e) => setRate(e.target.value)}
              error={errors.rate !== undefined && errors.rate.length > 0}
              helperText={errors.rate}
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              label="Purchase Price"
              name="price"
              variant="outlined"
              value={price}
              fullWidth
              sx={{ mt: 1, mb: 1 }}
              onChange={(e) => setPrice(e.target.value)}
              error={errors.price !== undefined && errors.price.length > 0}
              helperText={errors.price}
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              label="Down Payment"
              name="downPayment"
              variant="outlined"
              value={downPayment}
              fullWidth
              sx={{ mt: 1, mb: 1 }}
              onChange={(e) => setDownPayment(e.target.value)}
              error={
                errors.downPayment !== undefined &&
                errors.downPayment.length > 0
              }
              helperText={errors.downPayment}
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              label="Monthly Income"
              name="monthlyIncome"
              variant="outlined"
              value={monthlyIncome}
              fullWidth
              sx={{ mt: 1, mb: 1 }}
              onChange={(e) => setMonthlyIncome(e.target.value)}
              error={
                errors.monthlyIncome !== undefined &&
                errors.monthlyIncome.length > 0
              }
              helperText={errors.monthlyIncome}
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              label="Credit Score"
              name="creditScore"
              variant="outlined"
              value={creditScore}
              fullWidth
              sx={{ mt: 1, mb: 1 }}
              onChange={(e) => setCreditScore(e.target.value)}
              error={
                errors.creditScore !== undefined &&
                errors.creditScore.length > 0
              }
              helperText={errors.creditScore}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          onClick={() => handleSubmit()}
          endIcon={<SendIcon />}
          sx={{ mt: 5, mb: 5 }}
        >
          Check Application
        </Button>
        <Box sx={{ p: 2 }} bgcolor={resultMood}>
          <Grid container spacing={1}>
            <Grid xs={6}>
              <Typography variant="h6" gutterBottom>
                Loan Response
              </Typography>
            </Grid>
            <Grid xs={6}></Grid>
            <Grid xs={6}>
              <Typography variant="body1">
                Loan Amount : {loanAmount}
              </Typography>
            </Grid>

            <Grid xs={6}>
              <Typography variant="body1">
                Affordability : {affordability}
              </Typography>
            </Grid>
            <Grid xs={6}>
              <Typography variant="body1">
                Pre-Qualify : {preQualification}
              </Typography>
            </Grid>
            <Grid xs={6}>
              <Typography variant="body1">
                Loan payment : {loanPayment}
              </Typography>
            </Grid>
            <Grid xs={6}>
              <Typography variant="body1">
                Housing Expense : {housing}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoanForm;
