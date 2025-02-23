import { Stack } from "@mui/material";
import Bulb from "../../assets/icons/Bulb";
import FolderIcon from "../../assets/icons/FolderIcon";
import RocketIcon from "../../assets/icons/RocketIcon";
import UserIcon from "../../assets/icons/UserIcon";

function NavBar() {
  return (
    <Stack direction="row" spacing={4} sx={navBarStyles}>
      <UserIcon />
      <FolderIcon />
      <Bulb />
      <RocketIcon />
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
