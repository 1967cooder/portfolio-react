const Skills = () => {
  return (
    <div>
      <h1>Skills</h1>
    </div>
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
