import React from "react";
import { Box, Typography } from "@mui/material";
import EducationCard from "./EducationCard";
import useAxios from "../hooks/useAxios";

const Education = () => {
  const {
    data = [],
    loading,
    error,
  } = useAxios("http://localhost:3001/projects");

  if (loading) return <p>Loading education...</p>;
  if (error) return <p>Error loading education</p>;

  const educationItems = data.filter((item) => item.type === "education");

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h3"
        sx={{
          mb: 4,
          background: "linear-gradient(90deg, #00ffea, #7c4dff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Education
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 4,
        }}
      >
        {educationItems.map((edu) => (
          <EducationCard
            key={edu.id}
            title={edu.title}
            description={edu.description}
            link={edu.demo}
            certificatePdf={edu.certificatePdf}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Education;
