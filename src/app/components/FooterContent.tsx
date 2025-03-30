import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Flex, Row, Space, Tag, Typography } from "antd";
import { GitHubIcon, InstagramIcon, SendIcon, XIcon } from "../assets/icons";

const { Title, Text } = Typography;
function FooterContent() {
  return (
    <>
      <Row>
        <Col span={6}>
          <Flex vertical justify="space-between" gap={100}>
            <Flex vertical gap="middle">
              <Title level={3}>rebakure.com</Title>
              <Text>Let&apos;s learn and build stuff together.</Text>
              <Button style={{ width: 150 }}>
                <SendIcon />
                Send me an Email
              </Button>
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
        <Col span={6}>
          <Flex vertical justify="space-between" style={{ height: "100%" }}>
            <Flex vertical gap="middle">
              <Title level={4}>My Portfolio</Title>
              <Text>My projects collection</Text>
              <Text>Contribute to my projects</Text>
            </Flex>

            <Text underline>Credits</Text>
          </Flex>
        </Col>
        <Col span={6}>
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
    </>
  );
}

export default FooterContent;
