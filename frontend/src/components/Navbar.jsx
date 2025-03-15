/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  Typography,
  MenuItem,
  Select,
  useTheme,
  useMediaQuery,
  IconButton,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CallIcon from "@mui/icons-material/Call";
import { Link, useLocation } from "react-router-dom";
import { navItems, languageItem } from "../utils/constant";

const Navbar = () => {
  const [language, setLanguage] = useState("English");
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation(); // Get current route

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "8vh", sm: "7vh", md: "6vh" },
        bgcolor: "#d9dedb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          flexWrap: "wrap",
        }}
      >
        {/* Navigation Links or Hamburger Menu */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isMobile ? (
            <>
              <IconButton onClick={handleMenuOpen} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{ mt: 1 }}
              >
                {navItems.map((item) => (
                  <MenuItem
                    key={item.path}
                    onClick={handleMenuClose}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: location.pathname === item.path ? "blue" : "black",
                      fontWeight:
                        location.pathname === item.path ? "bold" : "normal",
                      "&:hover": { color: "blue" },
                    }}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      color: location.pathname === item.path ? "blue" : "black",
                      fontWeight:
                        location.pathname === item.path ? "bold" : "normal",
                      transition: "color 0.3s ease-in-out",
                      "&:hover": { color: "blue" },
                    }}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          )}
        </Box>

        {/* Call & Language section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <CallIcon sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }} />
          {!isMobile && (
            <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
              9090856788
            </Typography>
          )}

          <Select
            value={language}
            onChange={handleLanguageChange}
            variant="standard"
            disableUnderline
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem" },
              color: "inherit",
              "& .MuiSelect-icon": { color: "inherit" },
            }}
          >
            {languageItem.map((lang) => (
              <MenuItem key={lang} value={lang}>
                {lang}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
