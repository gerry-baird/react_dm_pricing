import React, { useState } from "react";
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
  Slider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Unstable_Grid2";

const DEFAULT_RATE = 2.5;

const LoanForm = () => {
  const [rate, setRate] = useState(DEFAULT_RATE);
  const [price, setPrice] = useState(0);
  const [creditScore, setCreditScore] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);

  const handleSubmit = (e) => {};
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
              defaultValue={DEFAULT_RATE}
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
              defaultValue={0}
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
              defaultValue={0}
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
              defaultValue={0}
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
              defaultValue={0}
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
              Results
            </Typography>
          </Grid>
          <Grid xs={6}></Grid>
          <Grid xs={6}>
            <Typography variant="body1">Loan Amount : 90000</Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="body1">Affordability : Affordable</Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="body1">
              Pre-Qualify : Likely Approved
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="body1">Loan payment : 454</Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="body1">Housing Expens : 1012</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default LoanForm;
