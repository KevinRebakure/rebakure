import { Card, Flex, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { GitHubIcon, XIcon, InstagramIcon, GmailIcon } from "../assets/icons";

const { Text } = Typography;

function Portals() {
  return (
    <Card title="Let's connect...">
      {portals.map((portal) => (
        <Flex
          id={portal.platform}
          vertical
          style={{ border: "1px solid blue" }}
        >
          {portal.icon} <Text>{portal.username}</Text>
        </Flex>
      ))}
    </Card>
  );
}

const portals = [
  {
    username: "KevinRebakure",
    platform: "GitHub",
    icon: <GitHubIcon style={{ fontSize: 32 }} />,
  },
  {
    username: "Kevin Rebakure",
    platform: "LinkedIn",
    icon: <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 32 }} />,
  },
  {
    username: "kevinrebakuree",
    platform: "X",
    icon: <XIcon style={{ fontSize: 32 }} />,
  },
  {
    username: "kevinrebakure",
    platform: "Instagram",
    icon: <InstagramIcon style={{ fontSize: 32 }} />,
  },
  {
    username: "kevinrebakure@gmail.com",
    platform: "gmail",
    icon: <GmailIcon style={{ fontSize: 32 }} />,
  },
];

export default Portals;
