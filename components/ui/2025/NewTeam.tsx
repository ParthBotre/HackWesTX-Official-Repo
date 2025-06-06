import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Grid, IconButton, Paper, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import { team2025FallHWT } from '../../../lib/constants/team-fall-2025';

type TeamMemberProps = {
  name: string;
  role: string;
  websiteUrl: string | undefined;
  avatarSrc: any;
};

const TeamMember = (props: TeamMemberProps) => {
  return (
    <Grid item xs={6} md={4} lg={3} mx="auto">
      <Box
        sx={{
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-10px)',
          },
        }}
      >
        <Avatar
          component={Paper}
          elevation={8}
          sx={{
            zIndex: '1',
            mx: "auto",
            my: 3,
            width: { xs: 150, sm: 175, md: 200, lg: 225 },
            height: { xs: 150, sm: 175, md: 200, lg: 225 },
            objectPosition: "center 15%",
            ".MuiAvatar-img": { objectPosition: "center 15%" },
            borderStyle: "solid",
            borderColor: "#a16207",
            borderWidth: 3,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              borderColor: '#fbbf24',
              boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)',
            },
          }}
          src={props.avatarSrc?.src}
          alt={props.name}
        />
        <Box 
          display="flex" 
          justifyContent="center" 
          alignItems="center"
          sx={{
            background: 'linear-gradient(180deg, rgba(2,1,22,0.8) 0%, rgba(1,0,16,0.9) 100%)',
            borderRadius: '12px',
            p: 2,
            mt: 2,
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography 
            variant="h5" 
            textAlign="center"
            sx={{
              color: '#ffffff',
              fontWeight: 600,
              textShadow: '0 0 10px rgba(251, 191, 36, 0.3)',
            }}
          >
            {props.name}
          </Typography>
          {props.websiteUrl &&
            <IconButton
              aria-label="linkedin-link"
              href={props.websiteUrl}
              target="_blank"
              sx={{
                color: '#fbbf24',
                '&:hover': {
                  color: '#ffffff',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <OpenInNewIcon />
            </IconButton>
          }
        </Box>
        <Typography 
          variant="h6" 
          textAlign="center"
          sx={{
            color: '#fbbf24',
            mt: 1,
            fontWeight: 500,
            textShadow: '0 0 10px rgba(251, 191, 36, 0.2)',
          }}
        >
          {props.role}
        </Typography>
      </Box>
    </Grid>
  )
}

const OurTeam = () => {
  return (
    <Grid
      container
      sx={{
        py: { xs: 5, md: 7, lg: 12 },
        background: 'linear-gradient(180deg, rgba(2,1,22,0.5) 0%, rgba(1,0,16,0.7) 100%)',
        borderRadius: '24px',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Grid item xs={12} my={5}>
        <div className="text-center font-light text-4xl sm:text-5xl md:text-6xl w-3/4 -mt-10 mx-auto bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Meet The HackWesTX VI Team
        </div>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        rowSpacing={4}
        px={4}
      >
        {team2025FallHWT.map((member: TeamMemberProps, index: number) => (
          <TeamMember 
            key={index} 
            name={member.name} 
            role={member.role} 
            websiteUrl={member.websiteUrl} 
            avatarSrc={member.avatarSrc} 
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default OurTeam;
