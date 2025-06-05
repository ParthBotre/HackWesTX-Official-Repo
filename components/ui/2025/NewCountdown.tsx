import { Box, Stack, Typography, Grid } from "@mui/material";
import Countdown, { CountdownRenderProps } from "react-countdown";
import styles from "../../styles/Home.module.css";

const HWTCountdown = () => {
  const renderer = (date: CountdownRenderProps) => {
    return (
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}  // Responsive spacing
          alignItems="center"
          justifyContent="center"
          color="#ffffff"
          my={4}
          sx={{ width: '100%', textAlign: 'center' }}
        >
           <Box>
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' } }}>
              {date.formatted.days}
            </Typography>
            <Typography variant="h6" sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem', lg: '1.5rem' }, color: '#a16207' }}>
              DAYS
            </Typography>
          </Box>
          <Box>
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' } }}>
              {date.formatted.hours}
            </Typography>
            <Typography variant="h6" sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem', lg: '1.5rem' }, color: '#a16207' }}>
              HOURS
            </Typography>
          </Box>
          <Box>
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' } }}>
              {date.formatted.minutes}
            </Typography>
            <Typography variant="h6" sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem', lg: '1.5rem' }, color: '#a16207' }}>
              MINUTES
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' } }}
              suppressHydrationWarning={true}
            >
              {date.formatted.seconds}
            </Typography>
            <Typography variant="h6" sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem', lg: '1.5rem' }, color: '#a16207' }}>
              SECONDS
            </Typography>
          </Box>
        </Stack>
      </Grid>
    );
  };

  return (
    <Countdown
      date={new Date("September 14, 2025 08:00:00")}
      renderer={renderer}
    />
  );
};

export default HWTCountdown;
