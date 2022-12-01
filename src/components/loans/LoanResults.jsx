import React from "react";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useLoanContext } from "../../context/LoanContext";

const LoanResults = () => {
  const { results, deleteResult } = useLoanContext();
  return (
    <Box flex={3} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Stack>
        {results.map((result, index) => {
          return (
            <Card key={index} sx={{ mb: 2 }}>
              <CardHeader
                action={
                  <IconButton onClick={(e) => deleteResult(index)}>
                    <DeleteIcon />
                  </IconButton>
                }
                subheader={result.currentTime}
              />
              <CardContent>
                <Typography variant="body2">
                  Rate : {result.loanRate}
                </Typography>
                <Typography variant="body2">
                  Purchase Price : {result.purchasePrice}
                </Typography>
                <Typography variant="body2">
                  Credit Score : {result.creditScore}
                </Typography>
                <Typography variant="body2">
                  Down Payment : {result.downPayment}
                </Typography>
                <Typography variant="body2">
                  Monthly Income : {result.monthlyIncome}
                </Typography>
                <Typography variant="body2">-</Typography>
                <Typography variant="body1" color="green">
                  {result.preQualify}
                </Typography>
                <Typography variant="body2">{result.affordability}</Typography>
                <Typography variant="body2">
                  Loan : {result.loanAmount}
                </Typography>
                <Typography variant="body2">
                  Payment : {result.payment}
                </Typography>
                <Typography variant="body2">
                  Housing : {result.housing}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </Box>
  );
};

export default LoanResults;
