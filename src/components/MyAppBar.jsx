import React, { useState } from "react";
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

import Button from "@mui/material/Button";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export default function MyAppBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLink = (link) => {
    setMenuOpen(false);
    window.open(link);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          IBM BAMOE : DM Demo UI
        </Typography>

        <Button color="inherit" onClick={(e) => setMenuOpen(true)}>
          Links
        </Button>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={menuOpen}
        onClose={(e) => setMenuOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          onClick={(e) => handleLink("https://www.ibm.com/docs/en/ibamoe")}
        >
          IBM Docs
        </MenuItem>
        <MenuItem onClick={(e) => handleLink("https://blog.kie.org/")}>
          KIE Blog
        </MenuItem>
        <MenuItem onClick={(e) => handleLink("https://kogito.kie.org/")}>
          Kogito
        </MenuItem>
      </Menu>
    </AppBar>
  );
}
