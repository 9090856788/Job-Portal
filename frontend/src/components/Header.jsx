import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "8vh",
          bgcolor: "#f0f2f5",
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-around", padding: 1.2 }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <HomeRepairServiceIcon />
            <Typography>JobHunt</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "0 8px",
                backgroundColor: "#fff",
              }}
            >
              <SearchIcon sx={{ color: "#aaa", marginRight: 1 }} />
              <input
                type="text"
                placeholder="Search..."
                style={{
                  border: "none",
                  outline: "none",
                  padding: 4,
                  width: 400,
                  height: 40,
                }}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="outlined">Sign In</Button>
            <Button variant="contained">Post A Job</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
