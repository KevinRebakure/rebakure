import { Typography } from "antd";

const { Title } = Typography;

export default function UserName() {
  return (
    <Title
      style={{
        textAlign: "center",
        fontWeight: "lighter",
        border: "1px solid white",
      }}
    >
      Kevin Rebakure
    </Title>
  );
}
