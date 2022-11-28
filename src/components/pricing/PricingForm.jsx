import React, { useState } from "react";
import { Card, Paper } from "@mui/material";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import SendIcon from "@mui/icons-material/Send";
import Divider from "@mui/material/Divider";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import { usePricingContext } from "../../context/PricingContext";

const DEFAULT_AGE = 25;

const PricingForm = () => {
  const [age, setAge] = useState(DEFAULT_AGE);
  const [priorIncidents, setPriorIncidents] = useState(false);
  const [errors, setErrors] = useState({});

  const { getPricingResult, reset, price } = usePricingContext();

  const handleSwitchChange = (event) => {
    setPriorIncidents(event.target.checked);
  };

  const validate = () => {
    let temp = {};

    if (age < 16 || age > 120) {
      temp.age = "Age must be between 16 and 120";
    }

    setErrors({ ...temp });

    //check every element in temp, to decide if validaiton was passed
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    if (validate()) {
      getPricingResult(age, priorIncidents);
    }
  };

  return (
    <Box flex={8} p={2}>
      <Box>
        <Paper sx={{ ml: 2, p: 4 }}>
          <Typography variant="h6" gutterBottom>
            Pricing Details
          </Typography>
          <TextField
            label="Age"
            name="age"
            variant="outlined"
            defaultValue={DEFAULT_AGE}
            fullWidth
            sx={{ mt: 1, mb: 1 }}
            onChange={(e) => setAge(e.target.value)}
            error={errors.age !== undefined && errors.age.length > 0}
            helperText={errors.age}
          />
          <FormGroup>
            <FormControlLabel
              control={<Switch onChange={handleSwitchChange} />}
              label="Prior incidents"
            />
          </FormGroup>
          <Divider />
          <Button
            variant="contained"
            onClick={() => handleSubmit()}
            endIcon={<SendIcon />}
            sx={{ mt: 5, mb: 5 }}
          >
            Get Price
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={reset}
            endIcon={<RestartAltIcon />}
            sx={{ ml: 5, mt: 5, mb: 5 }}
          >
            Reset
          </Button>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Result
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Price : {price}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default PricingForm;
