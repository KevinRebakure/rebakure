import { SendOutlined } from "@ant-design/icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Button, Col, Flex, Grid, Row, Space, Tag } from "antd";
import copy from "copy-to-clipboard";
import { useState } from "react";
import { H3, H4, Link, Text } from "../shared/typography";

const { useBreakpoint } = Grid;

function FooterContent() {
  const [showEmailCopiedAlert, setShowEmailCopiedAlert] = useState(false);
  const screens = useBreakpoint();

  return (
    <>
      <Row justify="center">
        <Col span={screens.xs ? 24 : 8}>
          <Flex vertical justify="space-between" gap={100}>
            <Flex vertical gap="middle">
              <H3>rebakure.com</H3>
              <Text>Let&apos;s learn and build stuff together.</Text>
              <Button
                style={{ width: 150 }}
                onClick={() => {
                  copy("kevinrebakure@gmail.com");
                  setShowEmailCopiedAlert(true);
                  setTimeout(() => {
                    setShowEmailCopiedAlert(false);
                  }, 1000);
                }}
              >
                <SendOutlined />
                Send me an Email
              </Button>
              {showEmailCopiedAlert && (
                <Alert
                  message="Copied email to the clipboard!"
                  type="success"
                  showIcon
                  style={{
                    maxWidth: "max-content",
                    position: "absolute",
                    bottom: 120,
                  }}
                />
              )}
            </Flex>

            <Flex vertical gap="middle">
              <Space size="middle" align="center">
                {portalIcons.map((icon) => (
                  <Link
                    href={icon.url}
                    key={icon.url}
                    target="_blank"
                    style={{ color: "white" }}
                  >
                    {icon.icon}
                  </Link>
                ))}
              </Space>
            </Flex>
          </Flex>
        </Col>

        {screens.md && (
          <>
            {linksGroup.map((group) => (
              <Col key={group.groupHeading} span={8}>
                <Flex vertical gap="middle">
                  <H4>{group.groupHeading}</H4>
                  {group.links.map((link) => (
                    <Space key={link.displayText}>
                      {/* <Link href={link.url} style={{ color: "white" }}>
                        {link.displayText}
                      </Link> */}
                      <Text>{link.displayText}</Text>
                      {!link.done && <Tag color="green">Upcoming</Tag>}
                    </Space>
                  ))}
                </Flex>
              </Col>
            ))}
          </>
        )}
      </Row>

      <Row justify="center">
        <Col span={8}>
          <Text>&copy;2025 rebakure.com</Text>
        </Col>
        <Col span={8}>
          <Link
            href="https://obsidian-punch-eb2.notion.site/Credits-1b130bedbec88029bc83eda68d03fe51?pvs=4"
            target="_blank"
            underline
            style={{ color: "white" }}
          >
            Credits
          </Link>
        </Col>
        <Col span={8}></Col>
      </Row>
    </>
  );
}

const portalIcons = [
  {
    url: "https://github.com/KevinRebakure",
    icon: <FontAwesomeIcon icon={faGithub} style={{ fontSize: 30 }} />,
  },
  {
    url: "https://www.linkedin.com/in/kevin-rebakure-91063a301/",
    icon: (
      <FontAwesomeIcon icon={faLinkedin} style={{ width: 30, height: 30 }} />
    ),
  },
  {
    url: "https://x.com/kevinrebakuree",
    icon: <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: 30 }} />,
  },
  {
    url: "https://www.instagram.com/kevinrebakure/",
    icon: <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 30 }} />,
  },
];

const linksGroup = [
  {
    groupHeading: "My Portfolio",
    links: [
      { displayText: "My projects collection", url: "", done: true },
      { displayText: "Contribute to my projects", url: "", done: true },
    ],
  },
  {
    groupHeading: "Open to the Community",
    links: [
      { displayText: "Be a core member", url: "", done: false },
      { displayText: "Share your projects", url: "", done: false },
    ],
  },
];

export default FooterContent;
