import { Place } from "@mui/icons-material";
import { Grid } from "@mui/material";
import Link from "next/link";
import NewCountdown from "./NewCountdown";
import SectionHeader from "./sectionHeader";

export default function ScheduleBloc() {
  return (
    <Grid item xs={12}>
      <div style={{
        background: 'rgb(0, 0, 0)',
        backdropFilter: 'blur(10px)',
        borderRadius: '24px',
        padding: '2rem'
      }}>
        <SectionHeader header="SCHEDULE" />
        <div className="text-poppins text-center text-5xl text-white mt-8 font-light">
          September 13th and 14th, 2025
        </div>
        <div className="text-center text-4xl text-white mt-2 font-light">
          <Link href="https://maps.app.goo.gl/BQYtDhJeGrdqgGwZ9" target="_blank" className="hover:text-blue-400 transition-colors duration-300">
            <Place fontSize="inherit" /> Innovation Hub, Texas Tech University
          </Link>
        </div>
        <NewCountdown />
      </div>
    </Grid>
  );
}