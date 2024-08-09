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
    <>
      <Box
        sx={{
          width: "100%",
          height: "5vh",
          bgcolor: "#d9dedb",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: 1,
          }}
        >
          <Box sx={{ display: "flex", alignContent: "center", gap: 2 }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography>Home</Typography>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Typography>About</Typography>
            </Link>
            <Link to="/job/search" style={{ textDecoration: "none" }}>
              <Typography>Find Job</Typography>
            </Link>
            <Link to="/recruiter" style={{ textDecoration: "none" }}>
              <Typography>Recruiter</Typography>
            </Link>
            <Link to="/jobseeker" style={{ textDecoration: "none" }}>
              <Typography>JobSeeker</Typography>
            </Link>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CallIcon />
            <Typography sx={{ marginLeft: 1 }}>9090856788</Typography>
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
    </>
  );
};

export default Navbar;
