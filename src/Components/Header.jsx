import React from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          component="img"
          sx={{ height: 40 }} // регулираш височината
          alt="Logo"
          src={logo}
        />
        <Box sx={{ flexGrow: 1 }} /> {/* за да бутне бутоните надясно */}
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              "&:hover": {
                backgroundColor: (theme) => theme.palette.secondary.main + 80, // прозрачност 20%
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{
              "&:hover": {
                backgroundColor: (theme) => theme.palette.secondary.main + 80, // прозрачност 20%
              },
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/projects"
            sx={{
              "&:hover": {
                backgroundColor: (theme) => theme.palette.secondary.main + 80, // прозрачност 20%
              },
            }}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/skills"
            sx={{
              "&:hover": {
                backgroundColor: (theme) => theme.palette.secondary.main + 80, // прозрачност 20%
              },
            }}
          >
            Skills
          </Button>
          {/* <Button color="inherit" component={Link} to="/employeesTable">
            Employees Table
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
