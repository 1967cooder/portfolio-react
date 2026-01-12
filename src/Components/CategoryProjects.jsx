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

// import React from "react";
// import { useParams } from "react-router-dom";
// import { Box, Typography } from "@mui/material";
// import ProjectCard from "./ProjectCard";
// import useAxios from "../hooks/useAxios";

// const CategoryProjects = () => {
//   const { category } = useParams();

//   // 🔒 Early return - ако category няма, не рендерирай нищо
//   if (!category) return null;

//   const { data, loading, error } = useAxios("http://localhost:3001/projects");

//   if (loading) return <p>Loading projects...</p>;
//   if (error) return <p>Error loading projects: {error}</p>;

//   // Проверка, дали data е масив
//   const projectsArray = Array.isArray(data) ? data : [];

//   const filteredProjects = projectsArray.filter(
//     (p) =>
//       p.category.toLowerCase() === category.toLowerCase() &&
//       p.featured === false
//   );

//   // Конзолата за проверка
//   console.log(
//     filteredProjects.map((p) => ({
//       title: p.title,
//       category: p.category,
//       featured: p.featured,
//     }))
//   );

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
//         {filteredProjects.length > 0 ? (
//           filteredProjects.map((project) => (
//             <ProjectCard key={project.id} {...project} />
//           ))
//         ) : (
//           <Typography>No projects found in this category.</Typography>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default CategoryProjects;
//________________________________________________________________________________

// import React from "react";
// import { useParams } from "react-router-dom";
// import { Box, Typography } from "@mui/material";
// import ProjectCard from "./ProjectCard";
// import useAxios from "../hooks/useAxios";

// const CategoryProjects = () => {
//   const { category } = useParams();

//   // Early return, ако category няма
//   if (!category) return null;

//   const { data, loading, error } = useAxios("http://localhost:3001/projects");

//   if (loading) return <p>Loading projects...</p>;
//   if (error) return <p>Error loading projects: {error}</p>;

//   // Проверка дали data е масив
//   const projectsArray = Array.isArray(data) ? data : [];

//   const filteredProjects = projectsArray.filter(
//     (p) =>
//       p.category && // ✅ проверка дали category съществува
//       p.category.toLowerCase() === category.toLowerCase() &&
//       p.featured === false
//   );

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
//         {filteredProjects.length > 0 ? (
//           filteredProjects.map((project, index) => (
//             <ProjectCard
//               key={project.id || index} // ✅ уникален key
//               {...project}
//             />
//           ))
//         ) : (
//           <Typography>No projects found in this category.</Typography>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default CategoryProjects;
//________________________________________________________________________________

import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import useAxios from "../hooks/useAxios";

const CategoryProjects = () => {
  const { category } = useParams();

  if (!category) return null;

  const {
    data = [],
    loading,
    error,
  } = useAxios("http://localhost:3001/projects");

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error loading projects: {error}</p>;

  const filteredProjects = data.filter(
    (p) => p.category?.toLowerCase() === category.toLowerCase()
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
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))
        ) : (
          <Typography>No projects found in this category.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default CategoryProjects;
