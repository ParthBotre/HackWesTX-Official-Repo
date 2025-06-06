import { Box, Grid, Stack, Typography } from "@mui/material";
import Countdown, { CountdownRenderProps } from "react-countdown";

const HWTCountdown = () => {
  const renderer = (date: CountdownRenderProps) => {
    return (
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          alignItems="center"
          justifyContent="center"
          my={4}
          sx={{ width: '100%', textAlign: 'center' }}
        >
          <Box>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
                background: 'linear-gradient(to right, #60a5fa, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 10px rgba(138, 43, 226, 0.6)) drop-shadow(0 0 20px rgba(0, 191, 255, 0.4))',
                textShadow: '0 0 10px rgba(138, 43, 226, 0.6), 0 0 20px rgba(0, 191, 255, 0.4)'
              }}
            >
              {date.formatted.days}
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem', lg: '1.5rem' },
                background: 'linear-gradient(to right, #60a5fa, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 10px rgba(138, 43, 226, 0.6)) drop-shadow(0 0 20px rgba(0, 191, 255, 0.4))',
                textShadow: '0 0 10px rgba(138, 43, 226, 0.6), 0 0 20px rgba(0, 191, 255, 0.4)'
              }}
            >
              DAYS
            </Typography>
          </Box>
          <Box>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
                background: 'linear-gradient(to right, #60a5fa, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 10px rgba(138, 43, 226, 0.6)) drop-shadow(0 0 20px rgba(0, 191, 255, 0.4))',
                textShadow: '0 0 10px rgba(138, 43, 226, 0.6), 0 0 20px rgba(0, 191, 255, 0.4)'
              }}
            >
              {date.formatted.hours}
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem', lg: '1.5rem' },
                background: 'linear-gradient(to right, #60a5fa, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 10px rgba(138, 43, 226, 0.6)) drop-shadow(0 0 20px rgba(0, 191, 255, 0.4))',
                textShadow: '0 0 10px rgba(138, 43, 226, 0.6), 0 0 20px rgba(0, 191, 255, 0.4)'
              }}
            >
              HOURS
            </Typography>
          </Box>
          <Box>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
                background: 'linear-gradient(to right, #60a5fa, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 10px rgba(138, 43, 226, 0.6)) drop-shadow(0 0 20px rgba(0, 191, 255, 0.4))',
                textShadow: '0 0 10px rgba(138, 43, 226, 0.6), 0 0 20px rgba(0, 191, 255, 0.4)'
              }}
            >
              {date.formatted.minutes}
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem', lg: '1.5rem' },
                background: 'linear-gradient(to right, #60a5fa, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 10px rgba(138, 43, 226, 0.6)) drop-shadow(0 0 20px rgba(0, 191, 255, 0.4))',
                textShadow: '0 0 10px rgba(138, 43, 226, 0.6), 0 0 20px rgba(0, 191, 255, 0.4)'
              }}
            >
              MINUTES
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h1"
              sx={{ 
                fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
                background: 'linear-gradient(to right, #60a5fa, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 10px rgba(138, 43, 226, 0.6)) drop-shadow(0 0 20px rgba(0, 191, 255, 0.4))',
                textShadow: '0 0 10px rgba(138, 43, 226, 0.6), 0 0 20px rgba(0, 191, 255, 0.4)'
              }}
              suppressHydrationWarning={true}
            >
              {date.formatted.seconds}
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem', lg: '1.5rem' },
                background: 'linear-gradient(to right, #60a5fa, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 10px rgba(138, 43, 226, 0.6)) drop-shadow(0 0 20px rgba(0, 191, 255, 0.4))',
                textShadow: '0 0 10px rgba(138, 43, 226, 0.6), 0 0 20px rgba(0, 191, 255, 0.4)'
              }}
            >
              SECONDS
            </Typography>
          </Box>
        </Stack>
      </Grid>
    );
  };

  return (
    <Countdown
      date={new Date("September 13, 2025 08:00:00")}
      renderer={renderer}
    />
  );
};

export default HWTCountdown;
