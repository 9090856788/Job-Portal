/* eslint-disable no-unused-vars */
import React from "react";
import { Select, MenuItem, Box, Typography } from "@mui/material";

const CountryDropdown = () => {
  const selectedCountry = "IN";
  const india = {
    name: "India",
    flag: "https://flagcdn.com/w40/in.png", // Optimized smaller flag
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Select
        value={selectedCountry}
        variant="standard"
        disableUnderline
        sx={{
          width: "110px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingY: "5px",
            minHeight: "36px",
            gap: "6px",
          },
          "& .MuiSelect-icon": { display: "none" },
        }}
        renderValue={() => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <img
              src={india.flag}
              alt={india.name}
              style={{
                width: 20,
                height: 15,
                objectFit: "contain",
                borderRadius: "2px",
                backgroundColor: "#f5f5f5",
                padding: "2px",
              }}
            />
            <Typography sx={{ fontSize: "0.75rem", fontWeight: 500 }}>
              {india.name}
            </Typography>
          </Box>
        )}
      >
        <MenuItem value="IN">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              width: "100%",
            }}
          >
            <img
              src={india.flag}
              alt={india.name}
              style={{
                width: 22,
                height: 16,
                objectFit: "contain",
                borderRadius: "2px",
                backgroundColor: "#f5f5f5",
                padding: "2px",
              }}
            />
            <Typography sx={{ fontSize: "0.8rem", fontWeight: 500 }}>
              {india.name}
            </Typography>
          </Box>
        </MenuItem>
      </Select>

      <Typography sx={{ fontSize: "1rem", color: "#999" }}>|</Typography>
    </Box>
  );
};

export default CountryDropdown;
