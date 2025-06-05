import { ArrowUpward } from "@mui/icons-material"; // Importing the arrow icon
import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BannerImage from "../../assets/2025-assets/HWT-banner.jpg";
import FrequentQuestions from "../../components/ui/2024/faq";
import Floating_Nav from "../../components/ui/2024/Floating-Nav";
import NewTeam from "../../components/ui/2024/NewTeam";
import ScheduleBloc from "../../components/ui/2025/ScheduleBloc";
import SectionHeader from "../../components/ui/2024/sectionHeader";
import SponsorBlock from "../../components/ui/2024/SponsorBlock";
import Footer from "../../components/ui/2025/NewFooter";

// Add sparkle text styles
const sparkleStyles = `
.sparkle-text {
    filter: drop-shadow(0 0 10px rgba(138, 43, 226, 0.6)) drop-shadow(0 0 20px rgba(0, 191, 255, 0.4));
    text-shadow: 0 0 10px rgba(138, 43, 226, 0.6), 0 0 20px rgba(0, 191, 255, 0.4);
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
            <Grid container overflow="clip" className="bg-gradient-to-b from-[#020116] via-[#010010] to-[#010012]">
                <div className="flex flex-col justify-center w-full h-full gap-y-5">
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
                            HackWes
                            <span className="inline text-blue-500 sparkle-text">TX</span>
                            VI is Texas Tech's
                            <span className="inline text-purple-500 sparkle-text">sixth</span>
                            student-run hackathon.
                        </div>
                        <div className="transform hover:scale-105 transition-transform duration-300">
                            A hackathon is an event where participants, often working in teams,
                            engage in
                            <span className="inline text-blue-500 sparkle-text"> intensive collaboration </span>
                            to create innovative solutions to
                            <span className="inline text-purple-500 sparkle-text"> real world problems </span>
                            within a limited time frame.
                        </div>
                        <div className="transform hover:scale-105 transition-transform duration-300">
                            HackWesTX is a
                            <span className="inline text-blue-500 sparkle-text"> 24-hour </span>
                            event.
                        </div>
                    </div>
                    <Grid item xs={12} mt={10} px="auto" className="bg-gray-800 bg-opacity-50 py-8 rounded-xl mx-4">
                        <ScheduleBloc />
                    </Grid>
                    <div className="bg-gray-800 bg-opacity-50 py-8 rounded-xl mx-4 my-8">
                        <SponsorBlock/>
                    </div>
                    <div className="bg-gray-800 bg-opacity-50 py-8 rounded-xl mx-4 my-8">
                        <SectionHeader header="FAQ" />
                        <div className="flex flex-col mx-auto w-4/5 my-8">
                            <div className="text-center font-light text-3xl w-3/4 gap-6 mx-auto my-8">
                                For any additional questions{" "}
                                <Link className="text-blue-500 hover:text-purple-500 transition-colors duration-300 m-0 p-0 sparkle-text" href={"mailto:contact@hackwestx.tech"}>
                                    contact us.
                                </Link>
                            </div>
                            <FrequentQuestions />
                        </div>
                    </div>
                    <div className="bg-gray-800 bg-opacity-50 py-8 rounded-xl mx-4 my-8">
                        <SectionHeader header="Our Team" />
                        <NewTeam/>
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
