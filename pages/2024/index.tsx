import { ArrowUpward } from "@mui/icons-material"; // Importing the arrow icon
import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BannerImage from "../../assets/2024-assets/banner.png";
import FrequentQuestions from "../../components/ui/2024/faq";
import Floating_Nav from "../../components/ui/2024/Floating-Nav";
import Footer from "../../components/ui/2024/NewFooter";
import NewTeam from "../../components/ui/2024/NewTeam";
import ScheduleBloc from "../../components/ui/2024/ScheduleBloc";
import SectionHeader from "../../components/ui/2024/sectionHeader";
import SponsorBlock from "../../components/ui/2024/SponsorBlock";

function Home_2024() {
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
        <Grid container overflow="clip">
            <div className="flex flex-col justify-center w-full h-full gap-y-5">
                <div className="relative w-full flex justify-center" id="home">
                    <Grid item xs={12}>
                        <Image
                            className="rounded-b-3xl w-full"
                            src={BannerImage}
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
                        <div className="absolute inset-0 flex justify-center items-center font-poppins font-semibold text-white w-full ">
                            <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl leading-none border-2 backdrop-saturate-200 backdrop-brightness-50 brightness-100 px-6">
                                HACKWESTX V
                            </div>
                        </div>
                    </Grid>
                </div>
                <Floating_Nav />
                <div className="my-4 flex flex-col justify-center text-center font-light text-3xl w-3/4 gap-6 mx-auto">
                    <div>
                        HackWes<div className="inline text-yellow-700">TX</div> V is Texas Tech&apos;s <div className="inline text-yellow-700">fifth</div> student-run hackathon.
                    </div>
                    <div>
                        A hackathon is an event where participants, often working in teams, engage in <div className="inline text-yellow-700">intensive collaboration</div> to create innovative solutions to <div className="inline text-yellow-700">real world problems</div> within a limited time frame.
                    </div>
                    <div>
                        HackWesTX is a <div className="inline text-yellow-700">24-hour</div> event.
                    </div>
                </div>
                <Grid item xs={12} mt={10} px="auto">
                    <ScheduleBloc />
                </Grid>
                <SponsorBlock/>
                <SectionHeader header="FAQ" />
                <div className="flex flex-col mx-auto w-4/5 my-8">
                    
                    <div className="text-center font-light text-3xl w-3/4 gap-6 mx-auto my-8">
                        For any additional questions{" "}
                        <Link className="text-yellow-700 m-0 p-0" href={"mailto:contact@hackwestx.tech"}>
                            contact us.
                        </Link>
                    </div>
                    <FrequentQuestions />
                </div>
                <div className="flex flex-col mx-auto w-4/5 my-8">
                    <SectionHeader header="Our Team" />
                    <NewTeam/>
                </div>
                <Footer />
                {showButton && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-5 right-5 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
                    >
                        <ArrowUpward />
                    </button>
                )}
            </div>
        </Grid>
    );
}

Home_2024.getLayout = (page: React.ReactElement) => page;

export default Home_2024;
