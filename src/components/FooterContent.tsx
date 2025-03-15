import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Flex, Row, Space, Tag, Typography } from "antd";
import { GitHubIcon, InstagramIcon, XIcon } from "../assets/icons";
import EmailMeForm from "./EmailMeForm";

const { Title, Text } = Typography;
function FooterContent() {
  return (
    <>
      <Row>
        <Col span={6}>
          <Flex vertical>
            <Title level={3}>rebakure.com</Title>
            <Text>Let's learn and build stuff together.</Text>
          </Flex>
        </Col>

        <Col span={6}>
          <Flex vertical gap="middle">
            <Title level={4}>My Portfolio</Title>
            <Text>My projects collection</Text>
            <Text>Contribute to my projects</Text>
          </Flex>
        </Col>

        <Col span={12}>
          <EmailMeForm />
        </Col>
      </Row>
      <Row>
        <Col span={6}>
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
            <Text underline>Credits</Text>
          </Flex>
        </Col>
      </Row>
    </>
  );
}

export default FooterContent;
