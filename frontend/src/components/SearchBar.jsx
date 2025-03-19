/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Box, Select, MenuItem, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SearchBar = () => {
  const [selectedCountry, setSelectedCountry] = useState("IN");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "8px 12px",
        width: "500px",
        backgroundColor: "#fff",
      }}
    >
      {/* Country Dropdown */}
      <Select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        variant="standard"
        disableUnderline
        IconComponent={ExpandMoreIcon}
        sx={{
          display: "flex",
          alignItems: "center",
          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            padding: "6px",
          },
        }}
      >
        <MenuItem value="IN">
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src="https://flagcdn.com/w40/in.png"
              alt="India"
              width="24"
              height="16"
              style={{ borderRadius: "2px" }}
            />
            <Typography sx={{ fontSize: "14px" }}>India</Typography>
          </Box>
        </MenuItem>
      </Select>

      {/* Divider */}
      <Typography sx={{ marginX: "12px", color: "#ccc", fontSize: "18px" }}>
        |
      </Typography>

      {/* Search Input */}
      <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
        <SearchIcon sx={{ color: "blue", marginRight: "8px" }} />
        <InputBase
          placeholder="Job title, keyword, company"
          sx={{ flex: 1, fontSize: "14px" }}
        />
      </Box>
    </Box>
  );
};

export default SearchBar;
