import React, { useEffect, useState } from "react";
import CategoryContainer from "./CategoryContainer";
import { Box } from "@mui/material";

const Projects = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [...new Set(data.map((p) => p.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box
      sx={{
        p: 3,
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr", // mobile
          sm: "repeat(2, 1fr)", // tablet
          md: "repeat(3, 1fr)", // desktop
        },
        gap: 3,
      }}
    >
      {categories.map((category) => (
        <CategoryContainer key={category} category={category} />
      ))}
    </Box>
  );
};

export default Projects;
