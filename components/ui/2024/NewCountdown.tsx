import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";
import styles from "../../styles/Home.module.css";

const HWTCountdown = () => {
  const renderer = (date: CountdownRenderProps) => {
    return (
    <div className="w-full">
      <Stack
        direction="row"
        spacing={[2, 3, 4, 5, 6]}
        alignItems="center"
        justifyContent="center"
        
        color="#1e40af"
        my={4}
      >
        <Box>
          <Typography variant="h1" textAlign="center">
            {date.formatted.days}
          </Typography>
          <Typography variant="h6" textAlign="center" color="#a16207">
            DAYS
          </Typography>
        </Box>
        <Box>
          <Typography variant="h1" textAlign="center">
            {date.formatted.hours}
          </Typography>
          <Typography variant="h6" textAlign="center" color="#a16207">
            HOURS
          </Typography>
        </Box>
        <Box>
          <Typography variant="h1" textAlign="center">
            {date.formatted.minutes}
          </Typography>
          <Typography variant="h6" textAlign="center" color="#a16207">
            MINUTES
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h1"
            textAlign="center"
            suppressHydrationWarning={true}
          >
            {date.formatted.seconds}
          </Typography>
          <Typography variant="h6" textAlign="center" color="#a16207">
            SECONDS
          </Typography>
        </Box>
      </Stack>
      </div>
    );
  };

  return (
    <Countdown
      date={new Date("September 14, 2024 08:00:00")}
      renderer={renderer}
    />
  );
};
export default HWTCountdown;
