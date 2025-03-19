/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import CandidateImage from "../assets/job search hero image.jpg";
import EmployerImage from "../assets/job search hero image.jpg";

const RegisterSection = () => {
  return (
    <Box display="flex" justifyContent="center" gap={3} p={4}>
      <Card
        sx={{
          display: "flex",
          width: "45%",
          boxShadow: 3,
          alignItems: "center",
          p: 2,
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            Become a Candidate
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus
            a dolor convallis efficitur.
          </Typography>
          <Button variant="contained">Register Now</Button>
        </CardContent>
        <img src={CandidateImage} alt="Candidate" width="150" />
      </Card>
      <Card
        sx={{
          display: "flex",
          width: "45%",
          backgroundColor: "#0070f3",
          color: "white",
          boxShadow: 3,
          alignItems: "center",
          p: 2,
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            Become an Employer
          </Typography>
          <Typography variant="body2" mb={2}>
            Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi sed
            efficitur dolor.
          </Typography>
          <Button variant="contained" color="secondary">
            Register Now
          </Button>
        </CardContent>
        <img src={EmployerImage} alt="Employer" width="150" />
      </Card>
    </Box>
  );
};

export default RegisterSection;
