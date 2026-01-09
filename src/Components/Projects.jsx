// import React from "react";
// import { Box, Typography } from "@mui/material";
// import CategoryContainer from "./CategoryContainer";
// // import useAxios from "../hooks/useAxios";
// import api from "../api/axios";
// import { useState, useEffect } from "react";

// const Projects = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await api.get("/projects"); // ако е static: "/db.json"
//         setData(response.data.projects || response.data); // за json-server или static db.json);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data</p>;

//   const uniqueCategories = [...new Set(data.map((p) => p.category))];

//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography
//         variant="h4"
//         sx={{
//           mb: 3,
//           textAlign: "left",
//           background: "linear-gradient(90deg, #00ffea, #7c4dff)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         Projects
//       </Typography>

//       <Box
//         sx={{
//           p: 3,
//           display: "grid",
//           gridTemplateColumns: {
//             xs: "1fr",
//             sm: "repeat(2, 1fr)",
//             md: "repeat(3, 1fr)",
//           },
//           gap: 3,
//         }}
//       >
//         {uniqueCategories.map((category) => (
//           <CategoryContainer
//             key={category}
//             category={category}
//             projects={data.filter((p) => p.category === category)}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Projects;

import React from "react";
import { Box, Typography } from "@mui/material";
import CategoryContainer from "./CategoryContainer";
import useAxios from "../hooks/useAxios";

const Projects = () => {
  const { data, loading, error } = useAxios("/projects");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error}</p>;

  const uniqueCategories = [...new Set(data.map((p) => p.category))];

  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          textAlign: "left",
          background: "linear-gradient(90deg, #00ffea, #7c4dff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "#111",
          pb: 2,
        }}
      >
        Projects
      </Typography>

      <Box
        sx={{
          p: 3,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 3,
        }}
      >
        {uniqueCategories.map((category) => (
          <CategoryContainer
            key={category}
            category={category}
            projects={data.filter((p) => p.category === category)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
