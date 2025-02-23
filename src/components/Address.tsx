import { Email, GitHub, Instagram, LinkedIn, X } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import ProfileLink from "./shared/ProfileLink";

function Address() {
  return (
    <Stack spacing={2} sx={{ border: "1px solid white" }}>
      <Typography variant="h6" component="h2">
        Let's connect...
      </Typography>

      {links.map((link) => (
        <ProfileLink {...link} />
      ))}
    </Stack>
  );
}

const links = [
  {
    icon: <GitHub color="inherit" />,
    href: "https://github.com/KevinRebakure",
    linkText: "KevinRebakure",
  },
  {
    icon: <Email color="inherit" />,
    href: "",
    linkText: "kevinrebakure@gmail.com",
  },
  {
    icon: <LinkedIn color="inherit" />,
    href: "https://www.linkedin.com/in/kevin-rebakure-91063a301/",
    linkText: "Kevin Rebakure",
  },
  {
    icon: <X color="inherit" />,
    href: "https://x.com/kevinrebakuree",
    linkText: "kevinrebakuree",
  },
  {
    icon: <Instagram color="inherit" />,
    href: "https://www.instagram.com/kevinrebakure/",
    linkText: "kevinrebakure",
  },
];

export default Address;
