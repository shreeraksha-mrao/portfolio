import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function LandingPage() {
  const [subheading1, setSubheading1] = useState('');
  const [subheading2, setSubheading2] = useState('');

  // Dynamic subheadings appear after delays
  useEffect(() => {
    setTimeout(() => {
      setSubheading1('Artificial Intelligence and Machine Learning Enthusiast');
    }, 1000); // 1 second delay for first subheading

    setTimeout(() => {
      setSubheading2('Marketing and HR Personnel');
    }, 3000); // 3 second delay for second subheading
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: 'black', // Full black background
        color: 'white', // White text
        minHeight: '100vh', // Full page height
        display: 'flex',
        alignItems: 'center', // Center the content vertically
        padding: 2,
      }}
    >
      <Container maxWidth="xl">
        <Grid container>
          {/* Left side: Text */}
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography
              variant="h1" // Larger heading
              sx={{ fontWeight: 'bold', mb: 2, fontSize: '5rem' }} // Adjust the size here
            >
              Raksha Rao
            </Typography>

            {/* Dynamically appearing subheadings */}
            {subheading1 && (
              <Typography variant="h5" sx={{ mb: 1 }}>
                {subheading1}
              </Typography>
            )}
            {subheading2 && (
              <Typography variant="h5">
                {subheading2}
              </Typography>
            )}
          </Grid>

          {/* Right side: Full-screen Image */}
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <Box
              component="img"
              src="landbg.jpg" // Replace with your image URL
              alt="Background Image"
              sx={{
                width: '100%', // Full width of the RHS
                height: '100vh', // Full height of the viewport
                objectFit: 'cover', // Ensures the image covers the entire area without distortion
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default LandingPage;
