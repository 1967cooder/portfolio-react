// -------------without theme---------------------------------

// import React from "react";

// import { Outlet } from "react-router-dom";
// import Footer from "./Components/Footer.jsx";
// import Header from "./Components/Header.jsx";
// import { Box, Container } from "@mui/material";

// const Layout = () => {
//   return (
//     <>
//       <Box
//         sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
//       >
//         <Header />
//         {/* <div> */}
//         <Container
//           component="main"
//           maxWidth="lg"
//           sx={{ flexGrow: 1, mt: 4, mb: 4 }}
//           background-color="black"
//         >
//           <Outlet />
//         </Container>
//         {/* </div> */}
//         <Footer />
//       </Box>
//     </>
//   );
// };

// export default Layout;

// -------------with theme toggle-------------------------------

import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import { Box, Container } from "@mui/material";
import { ThemeModeContext } from "./context/ThemeContext.jsx";

const Layout = () => {
  const { toggleTheme, mode } = useContext(ThemeModeContext);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header toggleTheme={toggleTheme} mode={mode} />
      <Container
        component="main"
        maxWidth="lg"
        sx={{ flexGrow: 1, mt: 4, mb: 4 }}
      >
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
