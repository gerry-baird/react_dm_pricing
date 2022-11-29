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

const DEFAULT_RATE = 2.5;

const LoanForm = () => {
  //local state for form inputs
  const [rate, setRate] = useState(DEFAULT_RATE);
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

  //state & functions from LoanContext
  const { getLoanResult, loanResult } = useLoanContext();

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

  const handleSubmit = (e) => {
    //create an object to hold all the data from the form
    const payload = {
      "Loan rate pct": parseFloat(rate),
      "Purchase price": parseInt(price),
      "Credit Score": parseInt(creditScore),
      "Down payment": parseInt(downPayment),
      "Monthly income": parseInt(monthlyIncome),
    };

    getLoanResult(payload);
  };

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
              defaultValue={rate}
              fullWidth
              sx={{ mt: 1, mb: 1 }}
              onChange={(e) => setRate(e.target.value)}
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              label="Purchase Price"
              name="price"
              variant="outlined"
              defaultValue={price}
              fullWidth
              sx={{ mt: 1, mb: 1 }}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              label="Down Payment"
              name="downPayment"
              variant="outlined"
              defaultValue={downPayment}
              fullWidth
              sx={{ mt: 1, mb: 1 }}
              onChange={(e) => setDownPayment(e.target.value)}
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              label="Monthly Income"
              name="monthlyIncome"
              variant="outlined"
              defaultValue={monthlyIncome}
              fullWidth
              sx={{ mt: 1, mb: 1 }}
              onChange={(e) => setMonthlyIncome(e.target.value)}
            />
          </Grid>
          <Grid xs={6}>
            <TextField
              label="Credit Score"
              name="creditScore"
              variant="outlined"
              defaultValue={creditScore}
              fullWidth
              sx={{ mt: 1, mb: 1 }}
              onChange={(e) => setCreditScore(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          onClick={() => handleSubmit()}
          endIcon={<SendIcon />}
          sx={{ mt: 5, mb: 5 }}
        >
          Check Applicaiton
        </Button>
        <Grid container spacing={1}>
          <Grid xs={6}>
            <Typography variant="h6" gutterBottom>
              Loan Response
            </Typography>
          </Grid>
          <Grid xs={6}></Grid>
          <Grid xs={6}>
            <Typography variant="body1">Loan Amount : {loanAmount}</Typography>
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
            <Typography variant="body1">Housing Expense : {housing}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default LoanForm;
