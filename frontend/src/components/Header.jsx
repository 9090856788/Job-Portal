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
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const [isLoggedin, setIsLoggedIn] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsLoggedIn(false);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "12vh", sm: "10vh", md: "8vh", lg: "8vh" }, // Responsive height
        bgcolor: "#f0f2f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingX: { xs: 1, sm: 2, md: 3 }, // Responsive padding
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens, row on larger screens
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          gap: { xs: 2, sm: 3 }, // Responsive gap
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 2 },
            flexWrap: "wrap",
            width: "100%",
            justifyContent: { xs: "center", sm: "flex-start" },
          }}
        >
          <HomeRepairServiceIcon />
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
          >
            JobHunt
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "0 8px",
              backgroundColor: "#fff",
              width: { xs: "100%", sm: "300px", md: "400px" }, // Responsive width
              maxWidth: "100%",
            }}
          >
            <SearchIcon sx={{ color: "#aaa", marginRight: 1 }} />
            <input
              type="text"
              placeholder="Search..."
              style={{
                border: "none",
                outline: "none",
                padding: "4px",
                width: "100%",
                height: "40px",
                boxSizing: "border-box",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack buttons vertically on small screens, row on larger screens
            gap: { xs: 1, sm: 2 },
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-end" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: { xs: "80%", sm: "140px" }, // Responsive width
              height: "40px",
              fontSize: { xs: "0.8rem", sm: "0.9rem" }, // Responsive font size
            }}
          >
            Post Job
          </Button>
          {isLoggedin ? (
            <Button
              variant="outlined"
              sx={{
                width: { xs: "80%", sm: "100px" }, // Responsive width
                height: "40px",
                fontSize: { xs: "0.8rem", sm: "0.9rem" }, // Responsive font size
              }}
            >
              Login
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
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
