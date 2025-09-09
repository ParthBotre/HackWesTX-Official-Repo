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
    <Box sx={{ textAlign: 'center', mx: 'auto', my: 5 }}>
      <Box
        sx={{
          width: sxWidth,
          backgroundImage: `url(${avatarSrc?.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          height: sxHeight,
          mx: "auto",
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
      <div className="text-white text-lg font-semibold mt-2">{name}</div>
    </Box>
  );
}

const SponsorBlock = () => {
  // Separate sponsors by tier
  const titleSponsors = sponsors2025.filter(sponsor => sponsor.tier === "Title");
  const silverSponsors = sponsors2025.filter(sponsor => sponsor.tier === "Silver");
  const venueSponsors = sponsors2025.filter(sponsor => sponsor.tier === "Venue");
  const thankYouSponsors = sponsors2025.filter(sponsor => sponsor.tier === "Thank You");
  const BronzeSponsors = sponsors2025.filter(sponsor => sponsor.tier === "Bronze");

  return (
    <div style={{
      background: 'rgb(0, 0, 0)',
      backdropFilter: 'blur(10px)',
      borderRadius: '24px',
      padding: '2rem'
    }}>
      <SectionHeader header="OUR SPONSORS" />

      {titleSponsors.length > 0 && (
        <>
          <h2 className="text-center text-3xl font-bold mb-6 text-white">TITLE SPONSORS</h2>
          <Grid container spacing={3} justifyContent="center">
            {titleSponsors.map((sponsor, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={`title-${index}`}>
                <IndividualSponsor
                  name={sponsor.name}
                  link={sponsor.link}
                  avatarSrc={sponsor.avatarSrc}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {silverSponsors.length > 0 && (
        <>
          <h2 className="text-center text-3xl font-bold my-6 text-white">SILVER SPONSORS</h2>
          <Grid container spacing={3} justifyContent="center">
            {silverSponsors.map((sponsor, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={`silver-${index}`}>
                <IndividualSponsor
                  name={sponsor.name}
                  link={sponsor.link}
                  avatarSrc={sponsor.avatarSrc}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}

{BronzeSponsors.length > 0 && (
              <>
                <h2 className="text-center text-3xl font-bold my-6 text-white">BRONZE SPONSORS</h2>
                <Grid container spacing={3} justifyContent="center">
                  {BronzeSponsors.map((sponsor, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={`venue-${index}`}>
                      <IndividualSponsor
                        name={sponsor.name}
                        link={sponsor.link}
                        avatarSrc={sponsor.avatarSrc}
                      />
                    </Grid>
                  ))}
                </Grid>
              </>
            )}

      {venueSponsors.length > 0 && (
        <>
          <h2 className="text-center text-3xl font-bold my-6 text-white">VENUE SPONSORS</h2>
          <Grid container spacing={3} justifyContent="center">
            {venueSponsors.map((sponsor, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={`venue-${index}`}>
                <IndividualSponsor
                  name={sponsor.name}
                  link={sponsor.link}
                  avatarSrc={sponsor.avatarSrc}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}


 
      {thankYouSponsors.length > 0 && (
        <>
          <h2 className="text-center text-3xl font-bold mb-6 text-white">Thank You</h2>
          <Grid container spacing={3} justifyContent="center">
            {thankYouSponsors.map((sponsor, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={`title-${index}`}>
                <IndividualSponsor
                  name={sponsor.name}
                  link={sponsor.link}
                  avatarSrc={sponsor.avatarSrc}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}

      <div className="text-center text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 my-12">
        More Sponsors Coming Soon!
      </div>
    </div>
  );
};

export default SponsorBlock;
