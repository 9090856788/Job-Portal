/* eslint-disable no-unused-vars */
import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  Avatar,
} from "@mui/material";
import { LocationOn, ArrowForward } from "@mui/icons-material";

// FeaturedJobs Component
const FeaturedJobs = () => {
  const jobs = [
    {
      title: "Technical Support Specialist",
      type: "PART-TIME",
      salary: "$20,000 - $25,000",
    },
    {
      title: "Senior UX Designer",
      type: "FULL-TIME",
      salary: "$20,000 - $25,000",
    },
    {
      title: "Marketing Officer",
      type: "INTERNSHIP",
      salary: "$20,000 - $25,000",
    },
    {
      title: "Junior Graphic Designer",
      type: "INTERNSHIP",
      salary: "$20,000 - $25,000",
    },
    {
      title: "Interaction Designer",
      type: "PART-TIME",
      salary: "$20,000 - $25,000",
    },
    {
      title: "Project Manager",
      type: "FULL-TIME",
      salary: "$20,000 - $25,000",
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4" fontWeight="bold">
          Featured Job
        </Typography>
        <Button
          variant="outlined"
          endIcon={<ArrowForward />}
          sx={{ textTransform: "none" }}
        >
          View All
        </Button>
      </Box>
      <Grid container spacing={3}>
        {jobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ p: 2, boxShadow: 1 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {job.title}
                </Typography>
                <Chip
                  label={job.type}
                  color="success"
                  size="small"
                  sx={{ mt: 1 }}
                />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Salary: {job.salary}
                </Typography>
                <Box display="flex" alignItems="center" mt={1}>
                  <Avatar
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    sx={{ width: 24, height: 24 }}
                  />
                  <Typography variant="body2" ml={1}>
                    Google Inc.
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mt={1}>
                  <LocationOn fontSize="small" />
                  <Typography variant="body2">Dhaka, Bangladesh</Typography>
                </Box>
                <Button variant="contained" sx={{ mt: 2 }} fullWidth>
                  See Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedJobs;
