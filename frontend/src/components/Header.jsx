/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
} from "@mui/material";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    handleClose();
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "10vh", sm: "9vh", md: "10vh" },
        bgcolor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          gap: { xs: 2, sm: 3 },
        }}
      >
        {/* Logo & Search Box */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 2 },
              flexWrap: "wrap",
              width: "100%",
              justifyContent: { xs: "center", sm: "flex-start" },
              cursor: "pointer",
            }}
          >
            <HomeRepairServiceIcon fontSize="large" />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.2rem", sm: "1.5rem", cursor: "pointer" },
              }}
            >
              JobHunt
            </Typography>
            <SearchBar />
          </Box>
        </Link>

        {/* Buttons & User Profile */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-end" },
            gap: { xs: 1.5, sm: 2 },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: { xs: "100px", sm: "140px" }, // Smaller on mobile
              height: { xs: "35px", sm: "40px" }, // Smaller on mobile
              fontSize: { xs: "0.8rem", sm: "1rem" }, // Adjust font size
              textTransform: "none",
            }}
          >
            Post A Jobs
          </Button>

          {!isLoggedin ? (
            <Button
              variant="outlined"
              onClick={() => setIsLoggedIn(true)}
              sx={{
                width: { xs: "100px", sm: "140px" }, // Smaller on mobile
                height: { xs: "35px", sm: "40px" }, // Smaller on mobile
                fontSize: { xs: "0.8rem", sm: "1rem" }, // Adjust font size
                textTransform: "none",
              }}
            >
              Sign In
            </Button>
          ) : (
            <Box>
              <IconButton onClick={handleAvatarClick} color="inherit">
                <Avatar alt="User Avatar" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                  mt: 1,
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
