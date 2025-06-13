import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import flask from "../../assets/icons/flask.svg";
import Megaphone from "../../assets/icons/megaphone.svg";
import Recruit from "../../assets/icons/recruit.svg";
import styles from "../../styles/Home.module.css";

const Sponsorships = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        backgroundColor: "black",
        color: theme.palette.primary.contrastText,
        py: { xs: 5, md: 7, lg: 12 },
        my: 10,
      }}
    >
      <Grid item xs={12} my={5}>
        <Typography textAlign="center" variant="h3" className={styles.glitch}>
          Sponsor Us!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            maxWidth: { xs: "70vw", md: "50vw", lg: "40vw" },
            my: 3,
            mx: "auto",
          }}
        >
          <Typography variant="body1" textAlign="center">
            Sponsoring a hackathon provides an excellent opportunity to connect
            with the most talented and ambitious students within a college
            community, all in a relaxed and convenient environment.
          </Typography>
        </Box>
        <Box
          sx={{
            justifyContent: "space-around",
            display: "flex",
          }}
        >
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{
              color: theme.palette.success.contrastText,
              my: 4,
              mx: "auto",
              borderRadius: 10,
            }}
            href="mailto:contact@hackwestx.tech"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            ✨ Contact Us ✨
          </Button>
        </Box>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        rowSpacing={5}
        px={4}
      >
        <Grid item xs={12} md={6} lg={4} mx="auto">
          <Box mx="auto" my={5} width={250} height={250}>
            <Image
              src={Megaphone}
              alt="Megaphone Icon"
              width={250}
              height={250}
            />
          </Box>
          <Typography variant="h5" textAlign="center">
            Gain Awareness
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4} mx="auto">
          <Box mx="auto" my={5} width={250} height={250}>
            <Image src={Recruit} alt="Recruit Icon" width={250} height={250} />
          </Box>
          <Typography variant="h5" textAlign="center">
            Recruit Developers
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4} mx="auto">
          <Box mx="auto" my={5} width={250} height={250}>
            <Image src={flask} alt="Flask Icon" width={250} height={250} />
          </Box>
          <Typography variant="h5" textAlign="center">
            Test APIs
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sponsorships;
