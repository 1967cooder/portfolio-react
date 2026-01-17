// import React from "react";
// import { Box, Typography, Button, TextField, IconButton } from "@mui/material";
// import ProjectCard from "./ProjectCard";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// // import DiscordIcon from "@mui/icons-material/Discord";
// import useAxios from "../hooks/useAxios";
// // import profilePic from "../assets/profilePic.jpeg";
// // import InteractiveSphereScene from "./InteractiveSphereScene";
// import InteractiveModel from "./InteractiveModel";

// const Home = () => {
//   const {
//     data = [],
//     loading,
//     error,
//   } = useAxios("http://localhost:3001/projects");

//   if (loading) return <p>Loading projects...</p>;
//   if (error) return <p>Error loading projects: {error}</p>;

//   const featuredProjects = data.filter((project) => project.featured === true);

//   return (
//     <Box sx={{ p: 4 }}>
//       {/* Welcome Text */}
//       <Typography
//         variant="h2"
//         sx={{
//           mb: 2,
//           fontWeight: "bold",
//           textAlign: "center",
//           background: "linear-gradient(90deg, #00ffea, #7c4dff)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         Welcome to my Portfolio
//       </Typography>

//       <Typography
//         variant="h5"
//         sx={{
//           mb: 6,
//           textAlign: "center",
//           fontStyle: "italic",
//           background: "linear-gradient(90deg, #00ffea, #7c4dff)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         Hi, I’m Silvana — aspiring web and programming developer & designer.
//         Explore my projects and journey below! "It always seems impossible until
//         it's done." - Nelson Mandela
//       </Typography>

//       {/* <Box
//         sx={{
//           width: { xs: "300px", md: "800px" },
//           height: { xs: "300px", md: "500px" },
//         }}
//       >
//         <InteractiveSphereScene />
//       </Box> */}
//       <Box
//         sx={{
//           width: { xs: "300px", md: "800px" },
//           height: { xs: "300px", md: "500px" },
//           mx: "auto",
//           mb: 4,
//           mt: 3,
//         }}
//       >
//         <InteractiveModel />
//       </Box>

//       {/* --- Under Construction --- */}
//       <Typography
//         variant="h3"
//         sx={{
//           textAlign: "center",
//           color: "white", // бял текст
//           mb: 4, // margin-bottom
//           fontWeight: "bold",
//           textShadow: "2px 2px 8px rgba(0,0,0,0.7)", // лек shadow за по-интересен вид
//         }}
//       >
//         Under Construction
//       </Typography>

//       {/* About section */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           alignItems: "center",
//           // textAlign: "center",
//           mb: 6,
//           gap: 6,
//         }}
//       >
//         {/* Image Left */}
//         {/* <Box
//           component="img"
//           src={profilePic}
//           alt="Silvana Lindholm"
//           sx={{
//             width: { xs: "100px", md: "200px" },
//             // height: "auto",
//             borderRadius: "2",
//             border: "4px solid #00ffea",
//           }}
//         /> */}
//         {/* Text Right */}
//         <Box sx={{ flex: 1 }}>
//           <Typography
//             variant="h4"
//             sx={{
//               mb: 2,
//               background: "linear-gradient(90deg, #00ffea, #7c4dff)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               textAlign: "left",
//               mt: 6,
//             }}
//           >
//             About Me
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               mb: 2,
//               background: "linear-gradient(90deg, #00ffea, #7c4dff)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             I am currently studying at a Business College, specializing in the
//             (Vocational Qualification in Information and Communication
//             Technology).
//           </Typography>

//           <Typography
//             variant="body1"
//             sx={{
//               mb: 2,
//               background: "linear-gradient(90deg, #00ffea, #7c4dff)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             The program is very practical compared to similar university
//             studies. The studies focus entirely on acquiring the key skills
//             essential for a software developer.
//           </Typography>

//           <Typography
//             variant="body1"
//             sx={{
//               mb: 2,
//               background: "linear-gradient(90deg, #00ffea, #7c4dff)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             The main modules of the qualification are: Programming, Working as a
//             software developer, Implementing software using a software component
//             library. The course of the studies includes React.js, WordPress,
//             JavaScript, Vanilla JavaScript, HTML, CSS, SQL basics and PHP. For
//             more information about me, please.
//           </Typography>

//           <Button
//             variant="outlined"
//             color="primary"
//             href="/about"
//             sx={{ borderColor: "#00ffea", color: "#00ffea" }}
//           >
//             click here
//           </Button>
//         </Box>
//       </Box>

//       {/* Featured Projects Section */}
//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: {
//             xs: "1fr",
//             sm: "repeat(2, 1fr)",
//             md: "repeat(3, 1fr)",
//           },
//           gap: 4,
//           mt: 10,
//         }}
//       >
//         {featuredProjects.map((project) => (
//           <ProjectCard
//             key={project.id}
//             description={project.description}
//             demo={project.type === "education" ? "/education" : project.demo}
//             demoLabel="See more"
//             showLinks={false}
//           />
//         ))}
//       </Box>

//       {/* Външен контейнер за центриране */}
//       <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
//         {/* Вътрешен Box с иконки и форма */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             gap: 6,
//             alignItems: "stretch",
//             width: "100%",
//             maxWidth: 800, // максимална ширина на контакт секцията
//           }}
//         >
//           {/* Icons column */}
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 2,
//               alignItems: "center",
//               justifyContent: "center",
//               minWidth: 70,
//               flexShrink: 0,
//             }}
//           >
//             <IconButton
//               href="https://github.com/1967cooder"
//               target="_blank"
//               sx={{ color: "white" }}
//             >
//               <GitHubIcon fontSize="large" />
//             </IconButton>
//             <IconButton
//               href="https://www.linkedin.com/in/silvanalindholm/"
//               target="_blank"
//               sx={{ color: "white" }}
//             >
//               <LinkedInIcon fontSize="large" />
//             </IconButton>
//           </Box>

//           {/* Form column */}
//           <Box sx={{ flex: 1, maxWidth: 500 }}>
//             <Typography
//               variant="h5"
//               sx={{
//                 mb: 2,
//                 background: "linear-gradient(90deg, #00ffea, #7c4dff)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 textAlign: "left",
//               }}
//             >
//               Contact Me
//             </Typography>
//             <Box
//               component="form"
//               sx={{ display: "flex", flexDirection: "column", gap: 2 }}
//             >
//               <TextField
//                 label="Name"
//                 variant="outlined"
//                 required
//                 id="name"
//                 name="name"
//                 autoComplete="name"
//                 inputProps={{ name: "name", autoComplete: "name" }}
//               />
//               <TextField
//                 label="Email"
//                 type="email"
//                 variant="outlined"
//                 required
//                 id="email"
//                 name="email"
//                 autoComplete="email"
//                 inputProps={{ name: "email", autoComplete: "email" }}
//               />
//               <TextField
//                 label="Message"
//                 multiline
//                 rows={4}
//                 variant="outlined"
//                 required
//                 id="message"
//                 name="message"
//                 autoComplete="off"
//                 inputProps={{ name: "message", autoComplete: "off" }}
//               />
//               <Button variant="contained" color="primary" type="submit">
//                 Send
//               </Button>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Home;
//-----------------------------------------

import React from "react";
import { Box, Typography, Button, TextField, IconButton } from "@mui/material";
import ProjectCard from "./ProjectCard";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import useAxios from "../hooks/useAxios";
import InteractiveModel from "./InteractiveModel";

const Home = () => {
  const { data = [], loading, error } = useAxios("/db.json");

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error loading projects: {error}</p>;

  // ❌ Старият филтър показваше всички featured, включително всички education cards
  // ✅ Сега избираме по един от всеки тип
  const cvProject = data.find(
    (project) => project.title === "CV" && project.featured
  );
  const proudProject = data.find(
    (project) => project.title === "Most proud project" && project.featured
  );
  const educationProject = data.find(
    (project) => project.type === "education" && project.featured
  );

  const featuredProjectsHome = [
    cvProject,
    proudProject,
    educationProject,
  ].filter(Boolean);

  return (
    <Box sx={{ p: 4 }}>
      {/* Welcome Text */}
      <Typography
        variant="h2"
        sx={{
          mb: 2,
          fontWeight: "bold",
          textAlign: "center",
          background: "linear-gradient(90deg, #00ffea, #7c4dff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Welcome to my Portfolio
      </Typography>

      <Typography
        variant="h5"
        sx={{
          mb: 6,
          textAlign: "center",
          fontStyle: "italic",
          background: "linear-gradient(90deg, #00ffea, #7c4dff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Hi, I’m Silvana — aspiring web and programming developer & designer.
        Explore my projects and journey below! "It always seems impossible until
        it's done." - Nelson Mandela
      </Typography>

      {/* Interactive 3D model */}
      <Box
        sx={{
          width: { xs: "300px", md: "800px" },
          height: { xs: "300px", md: "500px" },
          mx: "auto",
          mb: 4,
          mt: 3,
        }}
      >
        <InteractiveModel />
      </Box>

      {/* Under Construction */}
      {/* <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          color: "white",
          mb: 4,
          fontWeight: "bold",
          textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
        }}
      >
        Under Construction
      </Typography> */}

      {/* About section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          mb: 6,
          gap: 6,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              background: "linear-gradient(90deg, #00ffea, #7c4dff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "left",
              mt: 6,
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontSize: { xs: "1.5rem", md: "1.2rem" },
              background: "linear-gradient(90deg, #00ffea, #7c4dff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            I am currently studying at a Business College, specializing in the
            (Vocational Qualification in Information and Communication
            Technology).
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontSize: { xs: "1.5rem", md: "1.2rem" },
              background: "linear-gradient(90deg, #00ffea, #7c4dff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The program is very practical compared to similar university
            studies. The studies focus entirely on acquiring the key skills
            essential for a software developer.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontSize: { xs: "1.5rem", md: "1.2rem" },
              background: "linear-gradient(90deg, #00ffea, #7c4dff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The main modules of the qualification are: Programming, Working as a
            software developer, Implementing software using a software component
            library. The course of the studies includes React.js, WordPress,
            JavaScript, HTML, CSS, SQL basics and PHP.
          </Typography>

          <Button
            variant="outlined"
            color="primary"
            href="/about"
            sx={{ borderColor: "#00ffea", color: "#00ffea" }}
          >
            click here
          </Button>
        </Box>
      </Box>

      {/* Featured Projects Section - само 3 cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 4,
          mt: 10,
        }}
      >
        {featuredProjectsHome.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            demo={project.type === "education" ? "/education" : project.demo}
            demoLabel="See more"
            showLinks={false}
          />
        ))}
      </Box>

      {/* Contact section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 8,
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            alignItems: "stretch",
            width: "100%",
            maxWidth: 700,
          }}
        >
          {/* Icons column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
              justifyContent: "center",
              minWidth: 70,
              flexShrink: 0,
            }}
          >
            <IconButton
              href="https://github.com/1967cooder"
              target="_blank"
              sx={{ color: "white" }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>

            <IconButton
              href="https://www.linkedin.com/in/silvanalindholm/"
              target="_blank"
              sx={{ color: "white" }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>

            <IconButton
              href="mailto:silvanalindholm@hotmail.com"
              sx={{ color: "white" }}
            >
              <EmailIcon fontSize="large" />
            </IconButton>
          </Box>

          {/* Form column */}
          <Box sx={{ flex: 1, maxWidth: 500 }}>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                background: "linear-gradient(90deg, #00ffea, #7c4dff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: "center",
              }}
            >
              Contact Me
            </Typography>
            <Box
              component="form"
              name="contact" //for Netlify
              method="POST" //for Netlify
              data-netlify="true" //for Netlify
              action="/thank-you" //for Netlify
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              {/* Hidden input for Netlify */}
              <input
                type="hidden"
                id="form-name"
                name="form-name"
                value="contact"
              />

              <TextField
                label="Name"
                variant="outlined"
                required
                id="name"
                name="name"
                autoComplete="name"
                inputProps={{ name: "name", autoComplete: "name" }}
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                required
                id="email"
                name="email"
                autoComplete="email"
                inputProps={{ name: "email", autoComplete: "email" }}
              />
              <TextField
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                required
                id="message"
                name="message"
                autoComplete="off"
                inputProps={{ name: "message", autoComplete: "off" }}
              />
              <Button variant="contained" color="primary" type="submit">
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
