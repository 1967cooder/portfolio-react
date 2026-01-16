// src/Components/Skills.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

// Списък с умения + логота
const skills = [
  {
    name: "React",
    logo: "/logos/React (1).svg", // сложи картинката в /public/logos/
  },
  {
    name: "JavaScript",
    logo: "/logos/javascript-seeklogo.com.svg",
  },
  {
    name: "HTML5",
    logo: "/logos/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS3",
    logo: "/logos/css-3.svg",
  },
  {
    name: "Node.js",
    logo: "/logos/images.png",
  },
  {
    name: "Git",
    logo: "/logos/github-icon-logo-png_seeklogo-503247.png",
  },
  {
    name: "SQL",
    logo: "/logos/sql-database.svg",
  },
  {
    name: "WordPress",
    logo: "/logos/WordPress_blue_logo.svg.png",
  },
  {
    name: "PHP",
    logo: "/logos/PHP-logo.svg.png",
  },
];

const Skills = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h3"
        sx={{
          mb: 4,
          textAlign: "left",
          background: "linear-gradient(90deg, #00ffea, #7c4dff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My Skills
      </Typography>

      <Box
        sx={{
          mt: 8,
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(4, 1fr)",
            md: "repeat(6, 1fr)",
          },
          gap: 4,
          justifyItems: "center",
        }}
      >
        {skills.map((skill) => (
          <Box
            key={skill.name}
            sx={{
              backgroundColor: "#222",
              borderRadius: 2,
              p: 2,
              width: 150,
              height: 150,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 12px rgba(124, 77, 255, 0.7)",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 0 20px rgba(124, 77, 255, 0.9)",
              },
            }}
          >
            <Box
              component="img"
              src={skill.logo}
              alt={skill.name}
              sx={{
                width: 100,
                height: 100,
                mb: 1,
                objectFit: "contain",
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              {skill.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;

// import React from "react";
// import { Box, Typography, Grid } from "@mui/material";

// // Импортираме логата (SVG или PNG) от assets папката
// import htmlLogo from "../assets/html.png";
// import cssLogo from "../assets/css.png";
// import jsLogo from "../assets/javascript.png";
// import reactLogo from "../assets/react.png";
// import wordpressLogo from "../assets/wordpress.png";
// import phpLogo from "../assets/php.png";
// import nodeLogo from "../assets/nodejs.png";
// import sqlLogo from "../assets/sql.png";
// import githubLogo from "../assets/github.png";
// import figmaLogo from "../assets/figma.png";

// const skills = [
//   { name: "HTML", logo: htmlLogo },
//   { name: "CSS", logo: cssLogo },
//   { name: "JavaScript", logo: jsLogo },
//   { name: "React", logo: reactLogo },
//   { name: "WordPress", logo: wordpressLogo },
//   { name: "PHP", logo: phpLogo },
//   { name: "Node.js", logo: nodeLogo },
//   { name: "SQL", logo: sqlLogo },
//   { name: "GitHub", logo: githubLogo },
//   { name: "Figma", logo: figmaLogo },
// ];

// const Skills = () => {
//   return (
//     <Box sx={{ textAlign: "center", mt: 6, mb: 6 }}>
//       <Typography
//         variant="h3"
//         sx={{
//           mb: 4,
//           background: "linear-gradient(90deg, #00ffea, #7c4dff)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         My Skills
//       </Typography>

//       <Grid container spacing={4} justifyContent="center">
//         {skills.map((skill) => (
//           <Grid item xs={4} sm={3} md={2} key={skill.name}>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 gap: 1,
//               }}
//             >
//               <Box
//                 component="img"
//                 src={skill.logo}
//                 alt={skill.name}
//                 sx={{
//                   width: { xs: "50px", sm: "70px", md: "80px" },
//                   height: "auto",
//                 }}
//               />
//               <Typography variant="subtitle1">{skill.name}</Typography>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Skills;
