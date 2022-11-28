import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Group, Home } from "@mui/icons-material";
import FlightIcon from "@mui/icons-material/Flight";
import SellIcon from "@mui/icons-material/Sell";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleRouteClick = (route) => {
    navigate(route);
  };

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleRouteClick("/")}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleRouteClick("/pricing")}>
              <ListItemIcon>
                <SellIcon />
              </ListItemIcon>
              <ListItemText primary="Pricing" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleRouteClick("/loans")}>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Loans" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleRouteClick("/vacation")}>
              <ListItemIcon>
                <FlightIcon />
              </ListItemIcon>
              <ListItemText primary="Vacation" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
