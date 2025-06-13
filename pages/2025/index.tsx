import { ArrowUpward } from "@mui/icons-material"; // Importing the arrow icon
import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BannerImage from "../../assets/2025-assets/HWT-banner.jpg";
import FrequentQuestions from "../../components/ui/2025/faq";
import Floating_Nav from "../../components/ui/2025/Floating-Nav";
import Footer from "../../components/ui/2025/NewFooter";
import NewTeam from "../../components/ui/2025/NewTeam";
import ScheduleBloc from "../../components/ui/2025/ScheduleBloc";
import SectionHeader from "../../components/ui/2025/sectionHeader";
import SponsorBlock from "../../components/ui/2025/SponsorBlock";

function Home_2025() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Grid container overflow="clip" className="bg-black">
            <div className="flex flex-col justify-center w-full h-full gap-y-8">
                <div className="relative w-full flex justify-center" id="home">
                    <Grid item xs={12}>
                        <Image
                            className="rounded-b-3xl w-full shadow-2xl"
                            src={BannerImage.src}
                            alt="banner"
                            width={1920}
                            height={1080}
                            priority
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                        <div className="absolute inset-0 flex justify-center items-center font-poppins font-bold text-white w-full bg-black bg-opacity-50">
                            <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl leading-none px-8 py-6 transform hover:scale-105 transition-transform duration-300">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 filter drop-shadow-[0_0_10px_rgba(138,43,226,0.6)] drop-shadow-[0_0_20px_rgba(0,191,255,0.4)]">
                                    HACKWESTX VI
                                </span>
                            </div>
                        </div>
                    </Grid>
                </div>
                <Floating_Nav />
                <div className="my-12 flex flex-col justify-center text-center font-light text-3xl w-3/4 gap-8 mx-auto text-white">
                    <div className="transform hover:scale-105 transition-transform duration-300">
                        Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 filter drop-shadow-[0_0_10px_rgba(138,43,226,0.6)] drop-shadow-[0_0_20px_rgba(0,191,255,0.4)]">HackWesTX VI</span> Texas Tech&apos;s <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 filter drop-shadow-[0_0_10px_rgba(138,43,226,0.6)] drop-shadow-[0_0_20px_rgba(0,191,255,0.4)]">sixth</span> student-run hackathon.
                    </div>
                    <div className="transform hover:scale-105 transition-transform duration-300">
                        Join us for an epic <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 filter drop-shadow-[0_0_10px_rgba(138,43,226,0.6)] drop-shadow-[0_0_20px_rgba(0,191,255,0.4)]">24-hour</span> adventure where brilliant minds unite to create <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 filter drop-shadow-[0_0_10px_rgba(138,43,226,0.6)] drop-shadow-[0_0_20px_rgba(0,191,255,0.4)]">innovative solutions</span> to real-world challenges.
                    </div>
                    <div className="transform hover:scale-105 transition-transform duration-300">
                        Experience the <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 filter drop-shadow-[0_0_10px_rgba(138,43,226,0.6)] drop-shadow-[0_0_20px_rgba(0,191,255,0.4)]">Wild West</span> of innovation, where creativity knows no bounds!
                    </div>
                </div>
                <div className="relative my-16">
                    <div className="absolute inset-x-0 -top-8 h-8 bg-gradient-to-b from-transparent to-[rgba(2,1,22,0.3)] pointer-events-none"></div>
                    <ScheduleBloc />
                    <div className="absolute inset-x-0 -bottom-8 h-8 bg-gradient-to-t from-transparent to-[rgba(2,1,22,0.3)] pointer-events-none"></div>
                </div>
                <div className="relative my-16">
                    <div className="absolute inset-x-0 -top-8 h-8 bg-gradient-to-b from-transparent to-[rgba(2,1,22,0.3)] pointer-events-none"></div>
                    <SponsorBlock />
                    <div className="absolute inset-x-0 -bottom-8 h-8 bg-gradient-to-t from-transparent to-[rgba(2,1,22,0.3)] pointer-events-none"></div>
                </div>
                <div className="relative my-16">
                    <div className="absolute inset-x-0 -top-8 h-8 bg-gradient-to-b from-transparent to-[rgba(2,1,22,0.3)] pointer-events-none"></div>
                    <SectionHeader header="FAQ" />
                    <div className="flex flex-col mx-auto w-4/5 my-8">
                        <div className="text-center font-light text-3xl mx-auto text-white mb-4">
                            Got questions?{" "}
                            <Link className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 hover:from-purple-400 hover:to-blue-500 transition-all duration-300 filter drop-shadow-[0_0_10px_rgba(138,43,226,0.6)] drop_shadow-[0_0_20px_rgba(0,191,255,0.4)]" href="mailto:contact@hackwestx.tech">
                                Contact us
                            </Link>
                        </div>
                        <FrequentQuestions />
                    </div>
                    <div className="absolute inset-x-0 -bottom-8 h-8 bg-gradient-to-t from-transparent to-[rgba(2,1,22,0.3)] pointer-events-none"></div>
                </div>
                <div className="relative my-16">
                    <div className="absolute inset-x-0 -top-8 h-8 bg-gradient-to-b from-transparent to-[rgba(2,1,22,0.3)] pointer-events-none"></div>
                    <SectionHeader header="Our Team" />
                    <NewTeam />
                    <div className="absolute inset-x-0 -bottom-8 h-8 bg-gradient-to-t from-transparent to-[rgba(2,1,22,0.3)] pointer-events-none"></div>
                </div>
                <Footer />
                {showButton && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-5 right-5 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                    >
                        <ArrowUpward />
                    </button>
                )}
            </div>
        </Grid>
    );
}

Home_2025.getLayout = (page: React.ReactElement) => page;

export default Home_2025;
