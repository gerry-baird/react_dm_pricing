import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { usePricingContext } from "../../context/PricingContext";

const PricingResults = () => {
  const { results, deleteResult } = usePricingContext();

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
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
                //title="Pricing"
                subheader={result.currentTime}
              />
              <CardContent>
                <Typography variant="body2">Age : {result.age}</Typography>
                <Typography variant="body2">
                  Prior : {result.prior ? "Yes" : "No"}
                </Typography>
                <Typography variant="body1" color="green">
                  Price : {result.price}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </Box>
  );
};

export default PricingResults;
