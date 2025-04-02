import { Flex } from "antd";
import { H1, Text } from "../shared/typography";

export default function Welcome() {
  return (
    <Flex vertical style={{ height: "calc(100vh - 68px)" }} justify="center">
      <H1
        style={{
          textAlign: "center",
          fontWeight: "lighter",
        }}
      >
        Kevin Rebakure
      </H1>
      <Text style={{ textAlign: "center", fontSize: 24, fontWeight: 50 }}>
        Welcome to my Learning Journal :)
      </Text>
    </Flex>
  );
}
