import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "10vh", sm: "8vh", md: "5vh" }, // Responsive height
        bgcolor: "#d9dedb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingX: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 2 },
            flexWrap: "wrap",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="body1">Home</Typography>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Typography variant="body1">About</Typography>
          </Link>
          <Link to="/job/search" style={{ textDecoration: "none" }}>
            <Typography variant="body1">Find Job</Typography>
          </Link>
          <Link to="/recruiter" style={{ textDecoration: "none" }}>
            <Typography variant="body1">Recruiter</Typography>
          </Link>
          <Link to="/jobseeker" style={{ textDecoration: "none" }}>
            <Typography variant="body1">JobSeeker</Typography>
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          <CallIcon />
          <Typography sx={{ display: { xs: "none", sm: "block" } }}>
            9090856788
          </Typography>
          <select
            value={language}
            onChange={handleLanguageChange}
            style={{
              marginLeft: 15,
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              fontSize: "inherit",
              color: "inherit",
              fontSize: { xs: "0.8rem", sm: "1rem" }, // Responsive font size
            }}
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Odia">Odia</option>
            <option value="Bengali">Bengali</option>
            <option value="Kannada">Kannada</option>
          </select>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
