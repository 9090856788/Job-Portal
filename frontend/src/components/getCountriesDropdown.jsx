/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Select, MenuItem, Box, Typography } from "@mui/material";

const CountryDropdown = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("IN");

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await response.json();
        setCountries(data);
        const india = data.find((country) => country.cca2 === "IN");
        if (india) {
          setSelectedCountry(india.cca2);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountry();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Center horizontally
        height: "100%", // Ensure the parent container takes full height
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          variant="standard"
          disableUnderline
          sx={{
            width: "85px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingY: "5px",
              minHeight: "36px",
              gap: "6px", // Adds space between flag and text
            },
            "& .MuiSelect-icon": { display: "none" },
          }}
          renderValue={() => {
            const selected = countries.find((c) => c.cca2 === selectedCountry);
            return (
              selected && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <img
                    src={selected.flags.svg}
                    alt={selected.name.common}
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
                    {selected.name.common}
                  </Typography>
                </Box>
              )
            );
          }}
        >
          {countries.map((country) => (
            <MenuItem key={country.cca2} value={country.cca2}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 1,
                  width: "100%",
                }}
              >
                <img
                  src={country.flags.svg}
                  alt={country.name.common}
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
                  {country.name.common}
                </Typography>
              </Box>
            </MenuItem>
          ))}
        </Select>

        <Typography sx={{ fontSize: "1rem", color: "#999" }}>|</Typography>
      </Box>
    </Box>
  );
};

export default CountryDropdown;
