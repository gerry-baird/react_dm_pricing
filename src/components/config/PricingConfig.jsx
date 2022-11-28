import React, { useState } from "react";
import { Typography, Paper, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useAppContext } from "../../context/AppContext";

const PricingConfig = () => {
  const { pricingURL, setPricingURL, getDefaultPricingURL } = useAppContext();

  const [localURL, setLocalURL] = useState(pricingURL);
  const [backupURL, setBackupURL] = useState(pricingURL);

  const handleCancel = (e) => {
    setPricingURL(backupURL);
    setLocalURL(backupURL);
  };

  const handleSubmit = (e) => {
    setPricingURL(localURL);
    setBackupURL(localURL);
  };

  const handleReset = (e) => {
    const defaultURL = getDefaultPricingURL();
    setPricingURL(defaultURL);
    setLocalURL(defaultURL);
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Pricing Config
      </Typography>
      <TextField
        label="Pricing URL"
        variant="outlined"
        value={localURL}
        fullWidth
        sx={{ mt: 1, mb: 1 }}
        onChange={(e) => setLocalURL(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => handleSubmit()}
        endIcon={<SendIcon />}
        sx={{ mt: 5, mb: 5 }}
      >
        Update URL
      </Button>
      <Button
        variant="contained"
        onClick={() => handleCancel()}
        endIcon={<SendIcon />}
        sx={{ mt: 5, mb: 5, ml: 2 }}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleReset()}
        endIcon={<RestartAltIcon />}
        sx={{ ml: 2, mt: 5, mb: 5 }}
      >
        Reset URL
      </Button>
    </Paper>
  );
};

export default PricingConfig;
