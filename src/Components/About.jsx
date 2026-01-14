import { Box, Typography } from "@mui/material";
import React from "react";
import profilePic from "../assets/profilePic.jpeg";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        // textAlign: "center",
        mb: 6,
        gap: 6,
        mt: 10,
      }}
    >
      {/* Image Left */}
      <Box
        component="img"
        src={profilePic}
        alt="Silvana Lindholm"
        sx={{
          width: { xs: "100px", md: "200px" },
          // height: "auto",
          borderRadius: "2px",
          border: "4px solid #00ffea",
          mt: 10,
        }}
      />
      {/* Text Right */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h4"
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
          I am particularly interested in visual interface design and frontend
          development, especially working with React, HTML, CSS, and WordPress
          block themes. I am highly motivated to deepen my knowledge of React
          libraries, form validation, and the interaction between frontend and
          backend systems.
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
          In my free time, I enjoy playing tennis and going for walks. I also
          enjoy coding, handicrafts, and designing women’s clothing. I speak
          Bulgarian, Finnish, English, French, and Russian.
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
          I am passionate about building clean, functional, and visually
          appealing websites. My goal is to grow as a developer while creating
          meaningful digital experiences. My future plans are to continue
          developing professionally in the field of technology, and I would be
          glad if I am given the opportunity to expand my knowledge and enhance
          my skills.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
