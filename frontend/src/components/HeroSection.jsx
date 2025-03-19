/* eslint-disable no-unused-vars */
import React from "react";
import {
  Box,
  TextField,
  Button,
  InputAdornment,
  Divider,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "auto",
        textAlign: "center",
        backgroundColor: "#f8f9fc",
        padding: "20px",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "28px", sm: "38px", md: "42px" },
          color: "#222",
          lineHeight: "1.3",
        }}
      >
        Find a job that suits
        <br /> your interest & skills.
      </Typography>

      {/* Subtext */}
      <Typography
        variant="body1"
        sx={{
          color: "#666",
          fontSize: "18px",
          maxWidth: "600px",
          marginTop: "15px",
        }}
      >
        Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in
        scelerisque leo, eget sollicitudin velit vestibulum.
      </Typography>

      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
          padding: "5px",
          width: "100%",
          maxWidth: "580px",
          marginTop: "20px",
        }}
      >
        {/* Job Title Input */}
        <TextField
          variant="standard"
          placeholder="Job title, Keyword..."
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#1565C0" }} />
              </InputAdornment>
            ),
            sx: { padding: "10px" },
          }}
          sx={{ flex: 1, backgroundColor: "white", borderRadius: "4px" }}
        />

        {/* Divider */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: 1, height: "40px" }}
        />

        {/* Location Input */}
        <TextField
          variant="standard"
          placeholder="Your Location"
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <FmdGoodIcon sx={{ color: "#1565C0" }} />
              </InputAdornment>
            ),
            sx: { padding: "10px" },
          }}
          sx={{ flex: 1, backgroundColor: "white", borderRadius: "4px" }}
        />

        {/* Find Job Button */}
        <Button
          variant="contained"
          sx={{
            marginLeft: "8px",
            backgroundColor: "#1565C0",
            color: "white",
            padding: "12px 24px",
            borderRadius: "6px",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "16px",
            "&:hover": { backgroundColor: "#0D47A1" },
          }}
        >
          Find Job
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
