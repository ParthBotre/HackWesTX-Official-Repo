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

// Add sparkle text styles
const sparkleStyles = `
.sparkle-text {
    filter: drop-shadow(0 0 10px rgba(138, 43, 226, 0.6)) drop-shadow(0 0 20px rgba(0, 191, 255, 0.4));
    text-shadow: 0 0 10px rgba(138, 43, 226, 0.6), 0 0 20px rgba(0, 191, 255, 0.4);
}

.section-divider {
    background: linear-gradient(to right, rgba(96, 165, 250, 0.1), rgba(168, 85, 247, 0.1));
    backdrop-filter: blur(10px);
    border: 1px solid rgba(96, 165, 250, 0.2);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease-in-out;
}

.section-divider:hover {
    background: linear-gradient(to right, rgba(96, 165, 250, 0.15), rgba(168, 85, 247, 0.15));
    border-color: rgba(96, 165, 250, 0.3);
}

.section-transition {
    position: relative;
    margin: 2rem 0;
}

.section-transition::before {
    content: '';
    position: absolute;
    top: -2rem;
    left: 0;
    right: 0;
    height: 2rem;
    background: linear-gradient(to bottom, rgba(2, 1, 22, 0) 0%, rgba(2, 1, 22, 0.5) 100%);
    pointer-events: none;
}

.section-transition::after {
    content: '';
    position: absolute;
    bottom: -2rem;
    left: 0;
    right: 0;
    height: 2rem;
    background: linear-gradient(to top, rgba(2, 1, 22, 0) 0%, rgba(2, 1, 22, 0.5) 100%);
    pointer-events: none;
}
`;

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
        <>
            <style>{sparkleStyles}</style>
            <Grid container overflow="clip" className="bg-gradient-to-b from-gray-900 to-black">
                <div className="flex flex-col justify-center w-full h-full gap-y-8">
                    <div className="relative w-full flex justify-center" id="home">
                        <Grid item xs={12}>
                            <Image
                                className="rounded-b-3xl w-full min-w-fit shadow-2xl"
                                layout="responsive"
                                src={BannerImage}
                                alt="banner"
                                width={1440}
                                height={810}
                                priority
                            />
                            <div className="absolute inset-0 flex justify-center items-center font-poppins font-bold text-white w-full bg-black bg-opacity-50">
                                <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl leading-none px-8 py-6 transform hover:scale-105 transition-transform duration-300">
                                    <span className="sparkle-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                                        HACKWESTX VI
                                    </span>
                                </div>
                            </div>
                        </Grid>
                    </div>
                    <Floating_Nav />
                    <div className="my-12 flex flex-col justify-center text-center font-light text-3xl w-3/4 gap-8 mx-auto text-white">
                        <div className="transform hover:scale-105 transition-transform duration-300">
                            Welcome to <span className="sparkle-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">HackWesTX VI</span>, Texas Tech's <span className="sparkle-text bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">sixth</span> student-run hackathon.
                        </div>
                        <div className="transform hover:scale-105 transition-transform duration-300">
                            Join us for an epic <span className="sparkle-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">24-hour</span> adventure where brilliant minds unite to create <span className="sparkle-text bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">innovative solutions</span> to real-world challenges.
                        </div>
                        <div className="transform hover:scale-105 transition-transform duration-300">
                            Experience the <span className="sparkle-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Wild West</span> of innovation, where creativity knows no bounds!
                        </div>
                    </div>
                    <div className="section-transition">
                        <div className="section-divider py-8 rounded-xl mx-4">
                            <ScheduleBloc />
                        </div>
                    </div>
                    <div className="section-transition">
                        <div className="section-divider py-8 rounded-xl mx-4">
                            <SponsorBlock />
                        </div>
                    </div>
                    <div className="section-transition">
                        <div className="section-divider py-8 rounded-xl mx-4">
                            <SectionHeader header="FAQ" />
                            <div className="flex flex-col mx-auto w-4/5 my-8">
                                <div className="text-center font-light text-3xl mx-auto text-white">
                                    Got questions?{" "}
                                    <Link className="sparkle-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 hover:from-purple-400 hover:to-blue-500 transition-all duration-300" href="mailto:contact@hackwestx.tech">
                                        Contact us
                                    </Link>
                                </div>
                                <FrequentQuestions />
                            </div>
                        </div>
                    </div>
                    <div className="section-transition">
                        <SectionHeader header="Our Team" />
                        <NewTeam />
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
        </>
    );
}

Home_2025.getLayout = (page: React.ReactElement) => page;

export default Home_2025;
