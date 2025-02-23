import { Link, Stack } from "@mui/material";
import { ReactElement } from "react";

function ProfileLink({
  icon,
  href,
  linkText,
}: {
  icon: ReactElement;
  href: string;
  linkText: string;
}) {
  return (
    <Stack direction="row" spacing={1}>
      {icon}
      <Link href={href} color="textPrimary">
        {linkText}
      </Link>
    </Stack>
  );
}

export default ProfileLink;
