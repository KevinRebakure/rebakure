import { ConfigProvider, Flex, Layout, theme, Typography } from "antd";
import React from "react";
import "./App.css";
import { BulbIcon, FolderIcon, RocketIcon, UserIcon } from "./assets/icons";
import Portals from "./components/Portals";

const { Content, Footer, Header } = Layout;
const { Title } = Typography;

export default function App() {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <Flex gap={50} justify="center" align="center" style={iconsGroup}>
            <UserIcon style={iconStyles} />
            <FolderIcon style={iconStyles} />
            <BulbIcon style={iconStyles} />
            <RocketIcon style={iconStyles} />
          </Flex>
        </Header>

        <Content>
          <Flex style={{ border: "1px solid white" }} vertical>
            <Title>Kevin Rebakure</Title>
            <Portals />
          </Flex>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </ConfigProvider>
  );
}

const iconStyles: React.CSSProperties = {
  color: "white",
  fontSize: 32,
};

const iconsGroup: React.CSSProperties = {
  height: "100%",
};
