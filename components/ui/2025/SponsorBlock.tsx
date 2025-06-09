//import { Box, Grid } from "@mui/material";
//import Link from "next/link";
//import sponsors2024 from "../../../lib/constants/sponsors-2024";
import SectionHeader from "./sectionHeader";

var sxWidth = "100%";
const sxHeight = "25vh";

type SponsorType = {
  name: string;
  link: string;
  avatarSrc: any;
};

// Commented out IndividualSponsor component as sponsor logos are hidden
/*
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
*/

const SponsorBlock = () => {
  return (
    <div style={{
      background: 'linear-gradient(180deg, rgba(2,1,22,0.5) 0%, rgba(1,0,16,0.7) 100%)',
      backdropFilter: 'blur(10px)',
      borderRadius: '24px',
      padding: '2rem'
    }}>
      <SectionHeader header="OUR SPONSORS" />
      {/* Commented out sponsor logos for 'Coming Soon' message */}
      {/*
      <Grid
        container
        spacing={3}
        justifyContent="center"
      >
        {sponsors2024.map((sponsor, index) => (
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
      */}
      <div className="text-center text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 my-12">
        Coming Soon.....
      </div>
    </div>
  );
};

export default SponsorBlock;
