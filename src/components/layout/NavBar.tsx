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
      <AccountCircleRounded color="primary" />
      <FolderRounded color="primary" />
      <TipsAndUpdatesRounded color="primary" />
      <RocketLaunchRounded color="primary" />
    </Stack>
  );
}

const navBarStyles = {
  border: "1px solid white",
  padding: 2,
  alignItems: "center",
  justifyContent: "center",
};

export default NavBar;
