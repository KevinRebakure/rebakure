import {
  AccountCircleRounded,
  FolderRounded,
  RocketLaunchRounded,
  TipsAndUpdatesRounded,
} from "@mui/icons-material";
import { Stack } from "@mui/material";

function NavBar() {
  return (
    <Stack direction="row" spacing={4} sx={navBarStyles}>
      <AccountCircleRounded color="inherit" />
      <FolderRounded color="inherit" />
      <TipsAndUpdatesRounded color="inherit" />
      <RocketLaunchRounded color="inherit" />
    </Stack>
  );
}

const navBarStyles = {
  padding: 2,
  alignItems: "center",
  justifyContent: "center",
};

export default NavBar;
