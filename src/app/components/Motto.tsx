import { Typography } from "antd";

const { Title } = Typography;

function Motto() {
  return (
    <Title
      style={{
        textAlign: "center",
        paddingTop: 200,
        paddingBottom: 200,
        fontWeight: "lighter",
        border: "1px solid white",
      }}
    >
      Let&apos;s Learn and Build Stuff Together
    </Title>
  );
}

export default Motto;
