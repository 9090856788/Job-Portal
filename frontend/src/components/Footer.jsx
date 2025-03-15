/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#333",
          color: "#fff",
          py: 3,
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <Box mb={2}>
          {/* <img src="/path/to/logo.png" alt="Company Logo" style={{ width: '100px' }} /> */}
          JobHunt
        </Box>

        {/* Copyright Text */}
        <Typography variant="body2" mb={2}>
          © 2024 Your Company Name. All rights reserved.
        </Typography>

        {/* Social Icons */}
        <Box>
          <IconButton
            component={Link}
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener"
            sx={{ color: "#fff" }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener"
            sx={{ color: "#fff" }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener"
            sx={{ color: "#fff" }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener"
            sx={{ color: "#fff" }}
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
