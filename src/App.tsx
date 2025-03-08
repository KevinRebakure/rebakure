import {
  BulbOutlined,
  FolderOutlined,
  TagOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Flex, Layout } from "antd";

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
          <UserOutlined style={iconStyles} />
          <FolderOutlined style={iconStyles} />
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
  fontSize: 28,
};
