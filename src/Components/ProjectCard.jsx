// // ProjectCard.jsx
// import React from "react";
// import { Box, Typography, Button } from "@mui/material";

// const ProjectCard = ({
//   description,
//   github,
//   demo,
//   showLinks = true,
//   demoLabel = "DEMO",
// }) => {
//   return (
//     <Box
//       sx={{
//         backgroundColor: "#222",
//         color: "#fff",
//         p: 2,
//         borderRadius: 2,
//         mb: 2,
//         display: "flex",
//         flexDirection: "column",
//         gap: 2,
//         alignItems: "center",
//         boxShadow: "0 0 12px rgba(124, 77, 255, 0.7)",
//         transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
//         cursor: "pointer",
//         "&:hover": {
//           transform: "translateY(-4px)",
//           boxShadow: "0 0 20px rgba(124, 77, 255, 0.9)",
//           background: "linear-gradient(135deg, #222, #333)",
//         },
//       }}
//     >
//       <Typography variant="body1" sx={{ mb: 2, fontSize: "1.3rem" }}>
//         {description}
//       </Typography>

//       {/* GitHub button – само ако има github */}
//       {showLinks && github && (
//         <Button
//           href={github}
//           target="_blank"
//           sx={{
//             background: "linear-gradient(90deg, #00ffea, #7c4dff)",
//             color: "#fff",
//             mb: 1,
//             "&:hover": { opacity: 0.8 },
//           }}
//         >
//           GitHub
//         </Button>
//       )}

//       {/* Demo / See more */}
//       {demo && (
//         <Box
//           sx={{
//             backgroundColor: "#7c4dff",
//             color: "#fff",
//             textAlign: "center",
//             p: 1,
//             borderRadius: 1,
//             mt: 1,
//             cursor: "pointer",
//             fontWeight: "bold",
//             px: 16,
//             py: 1,
//             //   minWidth: "unset",
//           }}
//           onClick={() => window.open(demo, "_blank")}
//         >
//           {demoLabel}
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default ProjectCard;
//-------------------------------------
// // ProjectCard.jsx
// import React from "react";
// import { Box, Typography, Button } from "@mui/material";

// const ProjectCard = ({
//   description,
//   github,
//   demo,
//   demoLabel = "See more",
//   showLinks = true,
// }) => {
//   // Функция за отваряне на линк
//   const handleDemoClick = () => {
//     if (!demo) return;
//     // Ако линкът завършва на .pdf, отваряме в нов прозорец
//     window.open(demo, "_blank");
//   };

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#222",
//         color: "#fff",
//         p: 2,
//         borderRadius: 2,
//         mb: 2,
//         display: "flex",
//         flexDirection: "column",
//         gap: 2,
//         alignItems: "center",
//         boxShadow: "0 0 12px rgba(124, 77, 255, 0.7)",
//         transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
//         cursor: "pointer",
//         "&:hover": {
//           transform: "translateY(-4px)",
//           boxShadow: "0 0 20px rgba(124, 77, 255, 0.9)",
//           background: "linear-gradient(135deg, #222, #333)",
//         },
//       }}
//     >
//       <Typography variant="body1" sx={{ fontSize: "1.3rem", mb: 1 }}>
//         {description}
//       </Typography>

//       {/* GitHub бутон */}
//       {showLinks && github && (
//         <Button
//           href={github}
//           target="_blank"
//           sx={{
//             background: "linear-gradient(90deg, #00ffea, #7c4dff)",
//             color: "#fff",
//             mb: 1,
//             "&:hover": { opacity: 0.8 },
//           }}
//         >
//           GitHub
//         </Button>
//       )}

//       {/* Demo / See more */}
//       {demo && (
//         <Box
//           component="a"
//           href={demo}
//           target="_blank"
//           rel="noopener noreferrer"
//           sx={{
//             backgroundColor: "#7c4dff",
//             color: "#fff",
//             textAlign: "center",
//             p: 1,
//             borderRadius: 1,
//             mt: 1,
//             cursor: "pointer",
//             fontWeight: "bold",
//             width: "100%", // по-удобно за кликване
//             "&:hover": { opacity: 0.85 },
//           }}
//         >
//           {demoLabel}
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default ProjectCard;
//-------------------------------------

// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const ProjectCard = ({
//   title,
//   description,
//   github,
//   demo,
//   demoLabel = "See more",
//   showLinks = true,
// }) => {
//   const navigate = useNavigate();

//   const handleDemoClick = () => {
//     if (!demo) return;

//     // ✅ вътрешна навигация (Education → back връща Home)
//     if (demo.startsWith("/")) {
//       navigate(demo);
//     } else {
//       // ✅ външен линк (Netlify, GitHub, LinkedIn и т.н.)
//       window.open(demo, "_blank", "noopener,noreferrer");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#222",
//         color: "#fff",
//         p: 2,
//         borderRadius: 2,
//         mb: 2,
//         display: "flex",
//         flexDirection: "column",
//         gap: 2,
//         alignItems: "center",
//         boxShadow: "0 0 12px rgba(124, 77, 255, 0.7)",
//         transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
//         cursor: demo ? "pointer" : "default",
//         "&:hover": demo
//           ? {
//               transform: "translateY(-4px)",
//               boxShadow: "0 0 20px rgba(124, 77, 255, 0.9)",
//               background: "linear-gradient(135deg, #222, #333)",
//             }
//           : {},
//       }}
//       onClick={handleDemoClick}
//     >
//       {/* 🔹 Title (например Education) */}
//       {title && (
//         <Typography
//           variant="h6"
//           sx={{
//             background: "linear-gradient(90deg, #00ffea, #7c4dff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             fontWeight: "bold",
//           }}
//         >
//           {title}
//         </Typography>
//       )}

//       {/* 🔹 Description */}
//       <Typography variant="body1" sx={{ fontSize: "1.3rem", mb: 1 }}>
//         {description}
//       </Typography>

//       {/* 🔹 GitHub (ако е разрешено) */}
//       {showLinks && github && (
//         <Button
//           href={github}
//           target="_blank"
//           onClick={(e) => e.stopPropagation()} // ❗ да не trigger-ва navigate
//           sx={{
//             background: "linear-gradient(90deg, #00ffea, #7c4dff)",
//             color: "#fff",
//             "&:hover": { opacity: 0.8 },
//           }}
//         >
//           GitHub
//         </Button>
//       )}

//       {/* 🔹 See more (само визуално, навигацията е горе) */}
//       {demo && (
//         <Box
//           sx={{
//             backgroundColor: "#7c4dff",
//             color: "#fff",
//             textAlign: "center",
//             p: 1,
//             borderRadius: 1,
//             mt: 1,
//             fontWeight: "bold",
//             width: "100%",
//             "&:hover": { opacity: 0.85 },
//           }}
//         >
//           {demoLabel}
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default ProjectCard;
//--------------------------------------

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({
  title,
  description,
  github,
  demo,
  demoLabel = "See more",
  showLinks = true,
  hideDescription = false, // нов prop само за description
}) => {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    if (!demo) return;
    if (demo.startsWith("/")) navigate(demo);
    else window.open(demo, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#222",
        color: "#fff",
        p: 2,
        borderRadius: 2,
        mb: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        boxShadow: "0 0 12px rgba(124, 77, 255, 0.7)",
        transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
        cursor: demo ? "pointer" : "default",
        "&:hover": demo
          ? {
              transform: "translateY(-4px)",
              boxShadow: "0 0 20px rgba(124, 77, 255, 0.9)",
              background: "linear-gradient(135deg, #222, #333)",
            }
          : {},
      }}
      onClick={handleDemoClick}
    >
      {/* Title винаги видим */}
      {title && (
        <Typography
          variant="h6"
          sx={{
            background: "linear-gradient(90deg, #00ffea, #7c4dff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
      )}

      {/* Description – може да се скрие */}
      {!hideDescription && description && (
        <Typography variant="body1" sx={{ fontSize: "1.3rem", mb: 1 }}>
          {description}
        </Typography>
      )}

      {/* GitHub бутон */}
      {showLinks && github && (
        <Button
          href={github}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
          sx={{
            background: "linear-gradient(90deg, #00ffea, #7c4dff)",
            color: "#fff",
            mb: 1,
            "&:hover": { opacity: 0.8 },
          }}
        >
          GitHub
        </Button>
      )}

      {/* Demo / See more */}
      {demo && (
        <Box
          sx={{
            backgroundColor: "#7c4dff",
            color: "#fff",
            textAlign: "center",
            p: 1,
            borderRadius: 1,
            mt: 1,
            fontWeight: "bold",
            width: "100%",
            "&:hover": { opacity: 0.85 },
          }}
        >
          {demoLabel}
        </Box>
      )}
    </Box>
  );
};

export default ProjectCard;
