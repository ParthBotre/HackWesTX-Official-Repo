import { Box, Grid } from "@mui/material";
import Link from "next/link";
import sponsors2025 from "../../../lib/constants/sponsors-2025";
import SectionHeader from "./sectionHeader";

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
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
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
    <div style={{
      background: 'rgb(0, 0, 0)',
      backdropFilter: 'blur(10px)',
      borderRadius: '24px',
      padding: '2rem'
    }}>
      <SectionHeader header="OUR SPONSORS" />
      <Grid
        container
        spacing={3}
        justifyContent="center"
      >
        {sponsors2025.map((sponsor, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
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
      <div className="text-center text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 my-12">
        More Sponsors Coming Soon!
      </div>
    </div>
  );
};

export default SponsorBlock;
