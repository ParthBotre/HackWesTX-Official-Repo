import ForumIcon from "@mui/icons-material/Forum";
import MailIcon from "@mui/icons-material/Mail";
import SchoolIcon from "@mui/icons-material/School";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Instagram } from "@mui/icons-material";
import { Grid, Stack, Typography, useTheme } from "@mui/material";
import IconLink from "../../individual/IconLink";
import Logo from "../../../assets/2024-assets/logo.png"
import Image from "next/image";
import { Poppins } from "next/font/google";

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
    <Grid item xs={12} overflow='noclip'>
    <div className="w-full">
    <div className="w-full rounded-lg flex flex-row bg-gray-900 bg-opacity-15 p-8 justify-items-center justify-stretch">
    <Image
    src={Logo}
    height={400}
    width={418}
    className=" rounded-3xl"
    alt="HackWesTX Logo"
    />
    <div className="flex flex-col justify-center content-center mx-auto w-fit justify-items-center">
    <div className=" font-poppins text-center ">
       <div className=" font-normal text-3xl text-center mb-5">Celebrating 5 years of HackWesTX!</div> 
          <div className=" text-xl mb-3">Made with <div className=" inline text-yellow-700 mx-1">   ❤   </div> by HackWesTX Team</div>
    </div>
    <Stack
          justifyContent="space-evenly"
          direction="row"
          className="text-black"
          spacing={3}
          width={600}
          mt={2}
        >
          <IconLink
            href="https://discord.com/invite/Y9wUhS5cKp"
            child={<ForumIcon />}
            color='#000000'
          />
          <IconLink
            href="https://twitter.com/HWTXOfficial"
            child={<Instagram />}
            color='#000000'
          />
          <IconLink
            href="https://www.depts.ttu.edu/cs/"
            child={<SchoolIcon />}
            color='#000000'
          />
          <IconLink
            href={`mailto:contact@hackwestx.tech?subject=Quick%20HackWesTX%20Question`}
            child={<MailIcon />}
            color='#000000'
          />
        </Stack>
        </div>
    </div>
    </div>
    </Grid>
  );
};

export default Footer;
