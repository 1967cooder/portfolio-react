// import { Box, Typography, Button } from "@mui/material";
// import { Link } from "react-router-dom";

// const CategoryContainer = ({ category }) => {
//   // fallback, ако category е undefined или null
//   const safeCategory = category || "";

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         backgroundColor: "#222",
//         p: 3,
//         borderRadius: 2,
//         mb: 4,
//         display: "flex",
//         flexDirection: "column",
//         gap: 2,
//         alignItems: "center",
//         boxShadow: "0 0 12px rgba(124, 77, 255, 0.7)",
//       }}
//     >
//       <Typography
//         variant="h6"
//         sx={{
//           display: "inline-block",
//           background: "linear-gradient(90deg, #00ffea, #7c4dff)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           mb: 2,
//         }}
//       >
//         {category}
//       </Typography>

//       <Button
//         component={Link}
//         to={`/projects/${category.toLowerCase()}`}
//         sx={{
//           background: "linear-gradient(90deg, #00ffea, #7c4dff)",
//           color: "#fff",
//           "&:hover": { opacity: 0.85 },
//           boxShadow: "0 0 12px rgba(124, 77, 255, 0.7)",

//           px: 2,
//           py: 0.6,
//           minWidth: "unset", // Optional: adjust button width(smaller)
//           //   textTransform: "none", // Optional: keep the original casing(smaller)
//         }}
//       >
//         See more
//       </Button>
//     </Box>
//   );
// };

// export default CategoryContainer;

//------------------------------------------------

// import { Box, Typography, Button } from "@mui/material";
// import { Link } from "react-router-dom";

// const CategoryContainer = ({ category }) => {
//   // fallback, ако category е undefined или null
//   const safeCategory = category || "";

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         backgroundColor: "#222",
//         p: 3,
//         borderRadius: 2,
//         mb: 4,
//         display: "flex",
//         flexDirection: "column",
//         gap: 2,
//         alignItems: "center",
//         boxShadow: "0 0 12px rgba(124, 77, 255, 0.7)",
//       }}
//     >
//       <Typography
//         variant="h6"
//         sx={{
//           display: "inline-block",
//           background: "linear-gradient(90deg, #00ffea, #7c4dff)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           mb: 2,
//         }}
//       >
//         {safeCategory}
//       </Typography>

//       {safeCategory && (
//         <Button
//           component={Link}
//           to={`/projects/${safeCategory.toLowerCase()}`}
//           sx={{
//             background: "linear-gradient(90deg, #00ffea, #7c4dff)",
//             color: "#fff",
//             "&:hover": { opacity: 0.85 },
//             boxShadow: "0 0 12px rgba(124, 77, 255, 0.7)",
//             px: 2,
//             py: 0.6,
//             minWidth: "unset",
//           }}
//         >
//           See more
//         </Button>
//       )}
//     </Box>
//   );
// };

// export default CategoryContainer;
//------------------------------------------------
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const CategoryContainer = ({ category }) => {
  const safeCategory = category || "Unknown";

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#222",
        p: 3,
        borderRadius: 2,
        mb: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        boxShadow: "0 0 12px rgba(124, 77, 255, 0.7)",
        transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 0 20px rgba(124, 77, 255, 0.9)",
          background: "linear-gradient(135deg, #222, #333)",
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          display: "inline-block",
          background: "linear-gradient(90deg, #00ffea, #7c4dff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 2,
        }}
      >
        {safeCategory}
      </Typography>

      <Button
        component={Link}
        to={`/projects/${safeCategory.toLowerCase()}`}
        sx={{
          background: "linear-gradient(90deg, #00ffea, #7c4dff)",
          color: "#fff",
          "&:hover": { opacity: 0.85 },
          boxShadow: "0 0 12px rgba(124, 77, 255, 0.7)",
          px: 2,
          py: 0.6,
          minWidth: "unset",
        }}
      >
        See more
      </Button>
    </Box>
  );
};

export default CategoryContainer;
