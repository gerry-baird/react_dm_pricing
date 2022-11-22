import React, { useState } from "react";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "axios";

const Pricing = () => {
  const [price, setPrice] = useState(0);
  const [age, setAge] = useState(0);
  const [priorIncidents, setPriorIncidents] = useState(false);

  const handleSwitchChange = (event) => {
    setPriorIncidents(event.target.checked);
  };

  const getPrice = async () => {
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
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
        Enter Details
      </Typography>
      <TextField
        label="Age"
        variant="outlined"
        fullWidth
        sx={{ mt: 1, mb: 1 }}
        onChange={(e) => setAge(e.target.value)}
      />
      <FormGroup>
        <FormControlLabel
          control={<Switch onChange={handleSwitchChange} />}
          label="Prior incidents"
        />
      </FormGroup>

      <Button variant="contained" onClick={getPrice}>
        Get Price
      </Button>
      <Typography variant="subtitle1" sx={{ mt: 2 }}>
        Price : {price}
      </Typography>
    </Container>
  );
};

export default Pricing;
