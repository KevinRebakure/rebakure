import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Card, Flex, Grid, Typography } from "antd";
import copy from "copy-to-clipboard";
import { ReactElement, useState } from "react";
import { GitHubIcon, GmailIcon, InstagramIcon, XIcon } from "../assets/icons";
import { H3 } from "../shared/typography";
import styled from "styled-components";
import { Link } from "../shared/utils";

interface Portal {
  username: string;
  platform: string;
  url?: string;
  icon: ReactElement;
}

const { Text } = Typography;
const { useBreakpoint } = Grid;

function Portals() {
  const screens = useBreakpoint();

  const [showEmailCopiedAlert, setShowEmailCopiedAlert] = useState(false);

  return (
    <Card
      style={{
        margin: "0 auto",
      }}
      className="w-[90%] lg:w-[70%]"
    >
      <H3 style={{ marginBottom: 30 }}>Let&apos;s connect...</H3>
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
            {portal.platform === "gmail" ? (
              <StyledButton
                onClick={() => {
                  copy("kevinrebakure@gmail.com");
                  setShowEmailCopiedAlert(true);
                  setTimeout(() => {
                    setShowEmailCopiedAlert(false);
                  }, 1000);
                }}
              >
                {portal.icon}{" "}
                <Text className="hidden lg:block">{portal.username}</Text>
              </StyledButton>
            ) : (
              <Link
                href={portal.url!}
                target="_blank"
                style={{
                  display: "flex",
                  gap: 8,
                  flexDirection: "column",
                  alignItems: "center",
                  color: "white",
                }}
              >
                {portal.icon}{" "}
                <Text className="hidden lg:block">{portal.username}</Text>
              </Link>
            )}
          </Flex>
        ))}
      </Flex>
      {showEmailCopiedAlert && (
        <Alert
          message="Copied email to the clipboard!"
          type="success"
          showIcon
          style={{
            marginTop: 10,
            width: "max-content",
            position: "absolute",
            right: 0,
          }}
        />
      )}
    </Card>
  );
}

const StyledButton = styled.button`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #1890ff;
  }

  span {
    color: inherit;
  }
`;

const portals: Portal[] = [
  {
    username: "KevinRebakure",
    platform: "GitHub",
    url: "https://github.com/KevinRebakure",
    icon: <GitHubIcon style={{ fontSize: 40 }} />,
  },
  {
    username: "Kevin Rebakure",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/kevin-rebakure-91063a301/",
    icon: (
      <FontAwesomeIcon icon={faLinkedin} style={{ width: 40, height: 40 }} />
    ),
  },
  {
    username: "kevinrebakuree",
    platform: "X",
    url: "https://x.com/kevinrebakuree",
    icon: <XIcon style={{ fontSize: 40 }} />,
  },
  {
    username: "kevinrebakure",
    platform: "Instagram",
    url: "https://www.instagram.com/kevinrebakure/",
    icon: <InstagramIcon style={{ fontSize: 40 }} />,
  },
  {
    username: "kevinrebakure@gmail.com",
    platform: "gmail",
    icon: <GmailIcon style={{ fontSize: 40 }} />,
  },
];

export default Portals;
