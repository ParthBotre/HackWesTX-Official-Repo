import React from "react";
import Link from "next/link";
import { Divider } from "@mantine/core";
import SectionHeader from "./sectionHeader";
import NewCountdown from "./NewCountdown";
import { Place } from "@mui/icons-material";
import { Grid } from "@mui/material";

export default function ScheduleBloc() {
  return (
    <Grid item xs={12}>
      <div>
        <SectionHeader header="SCHEDULE" />
        <div className="text-poppins text-center text-5xl text-white mt-8 font-light">
          September 13th and 14th, 2025
        </div>
        <div className="text-center text-4xl text-white mt-2 font-light">
          <Link href="https://maps.app.goo.gl/BQYtDhJeGrdqgGwZ9" target="_blank">
            <Place fontSize="inherit" /> Innovation Hub, Texas Tech University
          </Link>
        </div>
        <NewCountdown />
      </div>
    </Grid>
  );
}
