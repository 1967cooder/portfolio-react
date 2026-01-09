// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Box, Typography } from "@mui/material";
// import ProjectCard from "./ProjectCard";
// // import useAxios from "../hooks/useAxios";
// import api from "../api/axios";

// const CategoryProjects = () => {
//   const { category } = useParams();
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await api.get("/projects"); // static: "/db.json"
//         const allProjects = response.data.projects || response.data;
//         // филтриране по категория
//         const filtered = allProjects.filter(
//           (p) => p.category.toLowerCase() === category.toLowerCase()
//         );
//         setProjects(filtered);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, [category]);

//   if (loading) return <p>Loading projects...</p>;
//   if (error) return <p>Error loading projects: {error}</p>;

//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography
//         variant="h4"
//         sx={{
//           mb: 4,
//           textAlign: "left",
//           background: "linear-gradient(90deg, #00ffea, #7c4dff)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         {category}
//       </Typography>

//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: {
//             xs: "1fr",
//             sm: "repeat(2, 1fr)",
//             md: "repeat(3, 1fr)",
//           },
//           gap: 3,
//         }}
//       >
//         {projects.map((project) => (
//           <ProjectCard key={project.id} {...project} />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default CategoryProjects;
import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import useAxios from "../hooks/useAxios";

const CategoryProjects = () => {
  const { category } = useParams();
  const { data, loading, error } = useAxios("/projects");

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error loading projects: {error}</p>;

  const filteredProjects = data.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <Box sx={{ p: 3 }}>
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
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Box>
    </Box>
  );
};

export default CategoryProjects;
