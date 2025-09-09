import { Place } from "@mui/icons-material";
import { Grid } from "@mui/material";
import Image from "next/image";
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
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="relative w-full rounded-lg overflow-hidden">
              <Image
                src="/sponsors/2.png"
                alt="Schedule Image 1"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full rounded-lg overflow-hidden">
              <Image
                src="/sponsors/3.png"
                alt="Schedule Image 2"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
        <NewCountdown />
      </div>
    </Grid>
  );
}