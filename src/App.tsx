import { BulbOutlined, TagOutlined } from "@ant-design/icons";
import { Flex, Layout } from "antd";
import BulbIcon from "./assets/icons/BulbIcon";
import UserIcon from "./assets/icons/UserIcon";

const { Content, Footer, Header } = Layout;

export default function App() {
  return (
    <Layout>
      <Header>
        <Flex
          gap="large"
          justify="center"
          align="center"
          style={{ border: "1px solid white", height: "100%" }}
        >
          <UserIcon style={iconStyles} />
          <BulbIcon style={iconStyles} />
          <BulbOutlined style={iconStyles} />
          <TagOutlined style={iconStyles} />
        </Flex>
      </Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

const iconStyles: React.CSSProperties = {
  color: "white",
  fontSize: 32,
};
