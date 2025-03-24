import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Flex, Typography } from "antd";
import { GitHubIcon, GmailIcon, InstagramIcon, XIcon } from "../assets/icons";
import { Grid } from "antd";

const { Text, Title } = Typography;
const { useBreakpoint } = Grid;

function Portals() {
  const screens = useBreakpoint();
  return (
    <Card
      style={{
        margin: "0 auto",
      }}
      className="w-[90%] lg:w-[70%]"
    >
      <Title level={3} style={{ marginBottom: 30 }}>
        Let's connect...
      </Title>
      <Flex
        className="justify-between sm:justify-center"
        gap={screens.md ? 100 : "large"}
      >
        {portals.map((portal) => (
          <Flex
            key={portal.platform}
            vertical
            align="center"
            gap="small"
            style={{ width: "max-content" }}
          >
            {portal.icon}{" "}
            <Text className="hidden lg:block">{portal.username}</Text>
          </Flex>
        ))}
      </Flex>
    </Card>
  );
}

const portals = [
  {
    username: "KevinRebakure",
    platform: "GitHub",
    icon: <GitHubIcon style={{ fontSize: 40 }} />,
  },
  {
    username: "Kevin Rebakure",
    platform: "LinkedIn",
    icon: (
      <FontAwesomeIcon icon={faLinkedin} style={{ width: 40, height: 40 }} />
    ),
  },
  {
    username: "kevinrebakuree",
    platform: "X",
    icon: <XIcon style={{ fontSize: 40 }} />,
  },
  {
    username: "kevinrebakure",
    platform: "Instagram",
    icon: <InstagramIcon style={{ fontSize: 40 }} />,
  },
  {
    username: "kevinrebakure@gmail.com",
    platform: "gmail",
    icon: <GmailIcon style={{ fontSize: 40 }} />,
  },
];

export default Portals;
