import { Box, Grid } from "@mui/material";
import Link from "next/link";
import sponsors2024 from "../../../lib/constants/sponsors-2024";
import SectionHeader from "./sectionHeader";
import clsx from 'clsx';

var sxWidth = "100%";
const sxHeight = "25vh";

type SponsorType = {
  name: string;
  link: string;
  avatarSrc: any;
};

function IndividualSponsor({ name, link, avatarSrc }: SponsorType) {
    const isMLT = name === "Management Leadership for Tomorrow";

    isMLT? sxWidth = "57%": sxWidth = "100%";
    
  return (
    <Box
      sx={{
        width: sxWidth,
        backgroundImage: `url(${avatarSrc?.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        height: sxHeight,
        mx: "auto",
        my: 5,
      }}

      
    >
      <Link href={link} rel="noopener" target="_blank">
        <Box sx={{ width: "100%", height: "100%" }} />
      </Link>
    </Box>
  );
}

const SponsorBlock = () => {
  return (
    <div>
    <SectionHeader header="OUR SPONSORS" />
    <Grid
      container
      spacing={3}
      justifyContent="center"  // Center the grid items horizontally
    >
      {sponsors2024.map((sponsor, index) => (
        <Grid
          item
          xs={12}     // Full width on extra small screens
          sm={6}      // Half width on small screens
          md={4}      // One-third width on medium screens
          lg={3}      // One-fourth width on large screens
          key={index}
        >
          <IndividualSponsor
            name={sponsor.name}
            link={sponsor.link}
            avatarSrc={sponsor.avatarSrc}
          />
        </Grid>
      ))}
    </Grid>
    </div>
  );
};

export default SponsorBlock;
