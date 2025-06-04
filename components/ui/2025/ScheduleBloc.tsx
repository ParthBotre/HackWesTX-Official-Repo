import React from "react";

import Link from "next/link";
import { Divider } from "@mantine/core";
import SectionHeader from "./sectionHeader";

import NewCountdown from "./NewCountdown"
import { LocationCity, Place} from "@mui/icons-material";
import { Grid } from "@mui/material";

export default function ScheduleBloc(){
    return(
        <Grid 
        item
        xs={12}
        >
        <div>
        <SectionHeader  header="SCHEDULE" />
        <div className="text-poppins text-center text-5xl text-black mt-8 font-light">September 14th and 15th 2024</div>
        <div className=" text-center text-4xl text-black mt-2 font-light"><Link href={'https://maps.app.goo.gl/BQYtDhJeGrdqgGwZ9'}><Place fontSize="inherit"/>Innovation Hub, Texas Tech University</Link></div>
        <NewCountdown/>
        
    </div>
    </Grid>
    )
}