// src/components/EducationCard.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";

const EducationCard = ({ title, description, link, certificatePdf }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#222",
        color: "#fff",
        p: 3,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // ✅ център хоризонтално
        textAlign: "center", // ✅ център на текста
        gap: 2,
        boxShadow: "0 0 12px rgba(124, 77, 255, 0.7)",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 0 20px rgba(124, 77, 255, 0.9)",
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          background: "linear-gradient(90deg, #00ffea, #7c4dff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>

      <Typography variant="body2">{description}</Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mt: "auto",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {link && (
          <Button
            href={link}
            target="_blank"
            sx={{
              background: "linear-gradient(90deg, #00ffea, #7c4dff)",
              color: "#fff",
              "&:hover": { opacity: 0.85 },
            }}
          >
            See more
          </Button>
        )}

        {certificatePdf?.trim().length > 0 && (
          <Button
            href={certificatePdf}
            target="_blank"
            variant="outlined"
            sx={{
              borderColor: "#00ffea",
              color: "#00ffea",
            }}
          >
            Certificate (PDF)
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default EducationCard;
