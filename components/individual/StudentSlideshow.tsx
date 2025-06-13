import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { Box, Card } from "@mui/material";
import Image from "next/image";

const StudentSlideshow = () => {
  const plugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
  ];
  return (
    <Flicking
      plugins={plugins}
      circular={true}
      align="prev"
    >
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src="/pastphotos/1.jpg" height={350} width={500} /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src="/pastphotos/2.jpg" height={350} width={500} /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src="/pastphotos/3.jpg" height={350} width={500} /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src="/pastphotos/4.jpg" height={350} width={500} /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src="/pastphotos/5.jpg" height={350} width={500} /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src="/pastphotos/6.jpg" height={350} width={500} /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src="/pastphotos/7.jpg" height={350} width={500} /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src="/pastphotos/8.jpg" height={350} width={500} /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src="/pastphotos/11.jpg" height={350} width={500} /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src="/pastphotos/12.jpg" height={350} width={500} /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src="/pastphotos/13.jpg" height={350} width={500} /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src="/pastphotos/15.jpg" height={350} width={500} /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src="/pastphotos/16.jpg" height={350} width={500} /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src="/pastphotos/17.jpg" height={350} width={500} /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src="/pastphotos/18.jpg" height={350} width={500} /></Box>
    </Flicking>
  );
};

export default StudentSlideshow;
