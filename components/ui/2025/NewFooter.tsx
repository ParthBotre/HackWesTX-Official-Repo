import { Instagram } from "@mui/icons-material";
import ForumIcon from "@mui/icons-material/Forum";
import MailIcon from "@mui/icons-material/Mail";
import SchoolIcon from "@mui/icons-material/School";
import { Grid, Stack, useTheme } from "@mui/material";
import Image from "next/image";
import Logo from "../../../assets/2025-assets/HWT25_logo.png";
import IconLink from "../../individual/IconLink";

/**
 * @fileoverview Social plugs and goodbyes w peace and love
 * @function Footer
 * @remarks Slightly improved on the footer from https://bosedeadetunji.com
 */
const Footer = () => {
  const theme = useTheme();
  const contrastColor = theme.palette.getContrastText(
    theme.palette.primary.light
  );

  return (
    <Grid item xs={12} overflow="noclip">
      <div className="w-full">
        <div className="w-full rounded-lg flex flex-col md:flex-row bg-gradient-to-b from-[#020116] via-[#010010] to-[#010012] p-8 justify-center items-center gap-y-8">
          <Image
            src={Logo}
            height={400}
            width={418}
            className="rounded-3xl"
            alt="HackWesTX Logo"
          />
          <div className="flex flex-col justify-center content-center mx-auto w-fit justify-items-center text-white text-center font-poppins">
            <div className="font-normal text-3xl mb-5">
              Celebrating 5 years of HackWesTX!
            </div>
            <div className="text-xl mb-3">
              Made with <span className="inline text-yellow-400 mx-1">❤</span> by HackWesTX Team
            </div>
            <Stack
              justifyContent="space-evenly"
              direction="row"
              className="text-white"
              spacing={3}
              width={600}
              mt={2}
            >
              <IconLink
                href="https://discord.com/invite/Y9wUhS5cKp"
                child={<ForumIcon />}
                color="#ffffff"
              />
              <IconLink
                href="https://twitter.com/HWTXOfficial"
                child={<Instagram />}
                color="#ffffff"
              />
              <IconLink
                href="https://www.depts.ttu.edu/cs/"
                child={<SchoolIcon />}
                color="#ffffff"
              />
              <IconLink
                href={`mailto:contact@hackwestx.tech?subject=Quick%20HackWesTX%20Question`}
                child={<MailIcon />}
                color="#ffffff"
              />
            </Stack>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default Footer;
