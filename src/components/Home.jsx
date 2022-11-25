import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box flex={7} p={2}>
      <Paper sx={{ mt: 2, p: 2 }} elevation={4} variant="outlined">
        <Typography variant="h6">Some useful informaiton here </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          omnis quis tempora culpa veritatis aliquam dolores. Quasi voluptas
          odio, excepturi sit officiis odit alias commodi quidem? Omnis aperiam
          inventore quae corporis ex numquam, quo fuga ab pariatur facilis
          accusantium, sint provident illo quos esse in vero nihil rem doloribus
          ad?{" "}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Home;
