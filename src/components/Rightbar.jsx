import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const Rightbar = ({ results, deleteResult }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Stack>
        <Typography color="primary" variant="subtitle1">
          Results...
        </Typography>

        {results.map((result, index) => {
          return (
            <Card key={index} sx={{ mb: 2 }}>
              <CardHeader
                action={
                  <IconButton onClick={(e) => deleteResult(index)}>
                    <DeleteIcon />
                  </IconButton>
                }
                title="Pricing"
                subheader={result.currentTime}
              />
              <CardContent>
                <Typography variant="body2">Age : {result.age}</Typography>
                <Typography variant="body2">
                  Prior : {result.prior ? "Yes" : "No"}
                </Typography>
                <Typography variant="body1" color="red">
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

export default Rightbar;
