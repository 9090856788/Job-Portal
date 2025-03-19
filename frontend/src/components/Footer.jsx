/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#121212",
        color: "#ddd",
        py: 5,
        px: { xs: 2, md: 10 },
      }}
    >
      <Grid container spacing={4}>
        {/* Left Section - Logo & Contact Info */}
        <Grid item xs={12} md={3}>
          <Box display="flex" alignItems="center" mb={2}>
            <BusinessCenterIcon sx={{ fontSize: 28, mr: 1, color: "#fff" }} />
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
              JobHunt
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ mb: 1, color: "#aaa" }}>
            Call now: <strong style={{ color: "#fff" }}>(319) 555-0115</strong>
          </Typography>
          <Typography variant="body2" sx={{ color: "#777" }}>
            6391 Elgin St. Celina, Delaware 10299, <br />
            New York, United States of America
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={2}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#fff", mb: 1 }}
          >
            Quick Link
          </Typography>
          {["About", "Contact", "Pricing", "Blog"].map((item, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{ color: "#777", mb: 1 }}
            >
              {item === "Contact" ? "→ " : ""}
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "#aaa",
                  "&:hover": { color: "#fff" },
                }}
              >
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Candidate Links */}
        <Grid item xs={12} md={2}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#fff", mb: 1 }}
          >
            Candidate
          </Typography>
          {[
            "Browse Jobs",
            "Browse Employers",
            "Candidate Dashboard",
            "Saved Jobs",
          ].map((item, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{ color: "#777", mb: 1 }}
            >
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "#aaa",
                  "&:hover": { color: "#fff" },
                }}
              >
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Employers Links */}
        <Grid item xs={12} md={2}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#fff", mb: 1 }}
          >
            Employers
          </Typography>
          {[
            "Post a Job",
            "Browse Candidates",
            "Employers Dashboard",
            "Applications",
          ].map((item, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{ color: "#777", mb: 1 }}
            >
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  color: "#aaa",
                  "&:hover": { color: "#fff" },
                }}
              >
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Support Links */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#fff", mb: 1 }}
          >
            Support
          </Typography>
          {["FAQs", "Privacy Policy", "Terms & Conditions"].map(
            (item, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{ color: "#777", mb: 1 }}
              >
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "#aaa",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {item}
                </Link>
              </Typography>
            )
          )}
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Box
        mt={5}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Typography variant="body2" sx={{ color: "#777", fontSize: "14px" }}>
          © 2024 JobHunt - Job Portal. All rights reserved.
        </Typography>

        {/* Social Media Icons */}
        <Box>
          {[Facebook, YouTube, Instagram, Twitter].map((Icon, index) => (
            <IconButton
              key={index}
              sx={{
                color: "#aaa",
                mx: 0.5,
                transition: "color 0.2s, transform 0.2s",
                "&:hover": { color: "#fff", transform: "scale(1.1)" },
              }}
            >
              <Icon />
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
