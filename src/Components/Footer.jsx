import { Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <footer className="attribution">
      <Box
        component="footer"
        sx={{
          color: "white",
          textAlign: "center",
          padding: "0.8rem",
          // margin: "auto",
          marginTop: 0.8,
          backgroundColor: "#7c4dff",
        }}
      >
        <Typography variant="body1" sx={{ flexGrow: 1, fontSize: "1rem" }}>
          {/* © 2025 hrApp. All rights reserved. */}© Copirihgts
          <a href="#" style={{ color: "#00ffea", textDecoration: "none" }}>
            Silvana Lindholm
          </a>
        </Typography>
      </Box>
    </footer>
  );

  //   <footer className="attribution">
  //     <Typography variant="body1">
  //       Copirihgts<a href="#">Silvana Lindholm</a>
  //     </Typography>
  //   </footer>
  // );
};
export default Footer;
