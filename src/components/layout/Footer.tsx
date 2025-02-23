import { Email, GitHub, Instagram, LinkedIn, X } from "@mui/icons-material";
import { Box, Grid2, Stack, Typography } from "@mui/material";

function Footer() {
  return (
    <Grid2
      container
      spacing={2}
      sx={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30471.jpg?t=st=1740325129~exp=1740328729~hmac=6af6cabd4bdfa231bb7673cf7085d22239eb86e365babd75c3eb4a4ce8c2aed2&w=900')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: 5,
      }}
    >
      {/* copyright and social media handles */}
      <Grid2 size={3}>
        <Stack justifyContent="space-between" spacing={10}>
          {/* rebakure.com */}
          <Box>
            <Typography variant="h5" component="p">
              rebakure.com
            </Typography>
            <Typography variant="body1" component="p">
              Le's learn and build stuff together
            </Typography>
          </Box>
          {/* social media handles */}
          <Stack direction="row" spacing={2}>
            <GitHub />
            <Email />
            <LinkedIn />
            <X />
            <Instagram />
          </Stack>
        </Stack>
      </Grid2>

      {/* coming soon */}
      <Grid2 size={3}></Grid2>
      <Grid2 size={6}></Grid2>
    </Grid2>
  );
}

export default Footer;
