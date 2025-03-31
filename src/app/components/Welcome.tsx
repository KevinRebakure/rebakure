import { Flex, Typography } from "antd";

const { Title, Text } = Typography;

export default function Welcome() {
  return (
    <Flex vertical style={{ height: "calc(100vh - 68px)" }} justify="center">
      <Title
        style={{
          textAlign: "center",
          fontWeight: "lighter",
        }}
      >
        Kevin Rebakure
      </Title>
      <Text style={{ textAlign: "center", fontSize: 24, fontWeight: 50 }}>
        Welcome to my Learning Journal :)
      </Text>
    </Flex>
  );
}
