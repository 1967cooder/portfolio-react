import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

const CategoryProjects = () => {
  const { category } = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (p) => p.category.toLowerCase() === category
        );
        setProjects(filtered);
      })
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <Box sx={{ p: 3 }}>
      {/* 🔹 Category title */}
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          textAlign: "left",
          background: "linear-gradient(90deg, #00ffea, #7c4dff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {category}
      </Typography>

      {/* 🔹 Projects grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 3,
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Box>
    </Box>
  );
};

export default CategoryProjects;
