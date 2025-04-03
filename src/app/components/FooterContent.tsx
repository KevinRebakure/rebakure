import { SendOutlined } from "@ant-design/icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Alert, Button, Col, Flex, Grid, Row, Space, Tag } from "antd";
import copy from "copy-to-clipboard";
import { useState } from "react";
import { GitHubIcon, InstagramIcon, XIcon } from "../assets/icons";
import { H3, H4, Text } from "../shared/typography";

const { useBreakpoint } = Grid;
function FooterContent() {
  const [showEmailCopiedAlert, setShowEmailCopiedAlert] = useState(false);
  const screens = useBreakpoint();

  return (
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
              <GitHubIcon style={{ fontSize: 30 }} />
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ width: 30, height: 30 }}
              />
              <XIcon style={{ fontSize: 30 }} />
              <InstagramIcon style={{ fontSize: 30 }} />
            </Space>
            <Text underline>&copy;2025 rebakure.com</Text>
          </Flex>
        </Flex>
      </Col>

      {screens.md && (
        <>
          <Col span={8}>
            <Flex vertical justify="space-between" style={{ height: "100%" }}>
              <Flex vertical gap="middle">
                <H4>My Portfolio</H4>
                <Text>My projects collection</Text>
                <Text>Contribute to my projects</Text>
              </Flex>

              <Text underline>Credits</Text>
            </Flex>
          </Col>
          <Col span={8}>
            <Flex vertical gap="middle">
              <H4>Open to the community</H4>
              <Space>
                <Text>Be a core member</Text>
                <Tag color="green">Upcoming</Tag>
              </Space>
              <Space>
                <Text>Share your projects</Text>
                <Tag color="green">Upcoming</Tag>
              </Space>
            </Flex>
          </Col>
        </>
      )}
    </Row>
  );
}

export default FooterContent;
