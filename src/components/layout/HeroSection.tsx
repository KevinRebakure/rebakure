import { Stack, Typography } from "@mui/material";
import Address from "../Address";

function HeroSection() {
  return (
    <Stack
      direction="row"
      spacing={30}
      sx={{
        padding: "50px 0 50px 0",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Stack spacing={1}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ borderBottom: "1px solid white" }}
        >
          Kevin Rebakure
        </Typography>
        <Typography variant="body2" component="p" sx={{ textAlign: "center" }}>
          I write good code!
        </Typography>
      </Stack>
      <Address />
    </Stack>
  );
}

export default HeroSection;
