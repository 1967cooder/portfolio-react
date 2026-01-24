// import React from "react";
// import Typography from "@mui/material/Typography";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.svg";

// const Header = () => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Box
//           component="img"
//           sx={{
//             height: { xs: 30, md: 40 }, // Малко по-малко лого на мобилни екрани
//             objectFit: "contain",
//           }} // регулираш височината
//           alt="Logo"
//           src={logo}
//         />
//         <Box sx={{ flexGrow: 1 }} /> {/* за да бутне бутоните надясно */}
//         <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
//           <Button
//             color="inherit"
//             component={Link}
//             to="/"
//             sx={{
//               "&:hover": {
//                 backgroundColor: (theme) => theme.palette.secondary.main + 80, // прозрачност 20%
//               },
//             }}
//           >
//             Home
//           </Button>
//           <Button
//             color="inherit"
//             component={Link}
//             to="/about"
//             sx={{
//               "&:hover": {
//                 backgroundColor: (theme) => theme.palette.secondary.main + 80, // прозрачност 20%
//               },
//             }}
//           >
//             About
//           </Button>
//           <Button
//             color="inherit"
//             component={Link}
//             to="/projects"
//             sx={{
//               "&:hover": {
//                 backgroundColor: (theme) => theme.palette.secondary.main + 80, // прозрачност 20%
//               },
//             }}
//           >
//             Projects
//           </Button>
//           <Button
//             color="inherit"
//             component={Link}
//             to="/skills"
//             sx={{
//               "&:hover": {
//                 backgroundColor: (theme) => theme.palette.secondary.main + 80, // прозрачност 20%
//               },
//             }}
//           >
//             Skills
//           </Button>
//           {/* <Button color="inherit" component={Link} to="/employeesTable">
//             Employees Table
//           </Button> */}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };
// export default Header;

//-------------without toggle theme----------------------------------
// import React, { useState } from "react";
// import Typography from "@mui/material/Typography";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.svg";
// import { useTheme } from "@mui/material/styles";

// const Header = () => {
//   const theme = useTheme();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
//       <List>
//         {[
//           { name: "Home", path: "/" },
//           { name: "About", path: "/about" },
//           { name: "Projects", path: "/projects" },
//           { name: "Skills", path: "/skills" },
//         ].map((item) => (
//           <ListItem key={item.name}>
//             <Button
//               component={Link}
//               to={item.path}
//               sx={{ color: theme.palette.text.primary, width: "100%" }}
//             >
//               {item.name}
//             </Button>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar position="static">
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         {/* Лого */}
//         <Box
//           component="img"
//           sx={{ height: { xs: 30, md: 40 }, objectFit: "contain" }}
//           alt="Logo"
//           src={logo}
//         />

//         {/* Desktop меню */}
//         <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
//           <Button color="inherit" component={Link} to="/">
//             Home
//           </Button>
//           <Button color="inherit" component={Link} to="/about">
//             About
//           </Button>
//           <Button color="inherit" component={Link} to="/projects">
//             Projects
//           </Button>
//           <Button color="inherit" component={Link} to="/skills">
//             Skills
//           </Button>
//         </Box>

//         {/* Hamburger бутон за мобилни */}
//         <IconButton
//           color="inherit"
//           edge="end"
//           onClick={handleDrawerToggle}
//           sx={{ display: { xs: "flex", sm: "none" } }}
//         >
//           <MenuIcon />
//         </IconButton>

//         {/* Drawer за мобилно меню */}
//         <Drawer
//           anchor="right"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{ keepMounted: true }}
//         >
//           {drawer}
//         </Drawer>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

//------------------------with theme toggle------------------------------

import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { ThemeModeContext } from "../context/ThemeContext";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleTheme, mode } = useContext(ThemeModeContext); // за бутон dark/light

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <List>
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Projects", path: "/projects" },
          { name: "Skills", path: "/skills" },
          // добавяме бутон за светла/тъмна тема
          {
            name: mode === "dark" ? "🌞 Light" : "🌙 Dark",
            action: toggleTheme,
          },
        ].map((item) => (
          <ListItem key={item.name}>
            {item.path ? (
              <Button
                component={Link}
                to={item.path}
                sx={{ color: "#ffffff", width: "100%" }}
              >
                {item.name}
              </Button>
            ) : (
              <Button
                onClick={item.action}
                sx={{ color: "#ffffff", width: "100%" }}
              >
                {item.name}
              </Button>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#7c4dff" }} // винаги лилав фон
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Лого */}
        <Box
          component="img"
          sx={{ height: { xs: 30, md: 40 }, objectFit: "contain" }}
          alt="Logo"
          src={logo}
        />

        {/* Desktop меню */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            Projects
          </Button>
          <Button color="inherit" component={Link} to="/skills">
            Skills
          </Button>
          <Button color="inherit" onClick={toggleTheme}>
            {mode === "dark" ? "🌞 Light" : "🌙 Dark"}
          </Button>
        </Box>

        {/* Hamburger бутон за мобилни */}
        <IconButton
          color="inherit"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer за мобилно меню */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
