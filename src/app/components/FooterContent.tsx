import { SendOutlined } from "@ant-design/icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Alert,
  Button,
  Col,
  Flex,
  Grid,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";
import copy from "copy-to-clipboard";
import { useState } from "react";
import { GitHubIcon, InstagramIcon, XIcon } from "../assets/icons";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;
function FooterContent() {
  const [showEmailCopiedAlert, setShowEmailCopiedAlert] = useState(false);
  const screens = useBreakpoint();

  return (
    <>
      {screens.xs && (
        <Flex vertical justify="space-between" gap={50}>
          <Flex vertical gap="middle">
            <Title level={3}>rebakure.com</Title>
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
                  bottom: 155,
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
            <Text underline>Credits</Text>
            <Text underline>About</Text>
          </Flex>
        </Flex>
      )}
      {screens.md && (
        <Row justify="center">
          <Col span={8}>
            <Flex vertical justify="space-between" gap={100}>
              <Flex vertical gap="middle">
                <Title level={3}>rebakure.com</Title>
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
          <Col span={8}>
            <Flex vertical justify="space-between" style={{ height: "100%" }}>
              <Flex vertical gap="middle">
                <Title level={4}>My Portfolio</Title>
                <Text>My projects collection</Text>
                <Text>Contribute to my projects</Text>
              </Flex>

              <Text underline>Credits</Text>
            </Flex>
          </Col>
          <Col span={8}>
            <Flex vertical gap="middle">
              <Title level={4}>Open to the community</Title>
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
        </Row>
      )}
    </>
  );
}

export default FooterContent;
