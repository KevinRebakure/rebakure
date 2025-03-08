import { ConfigProvider, Flex, Layout, theme, Typography } from "antd";
import React from "react";
import { BulbIcon, FolderIcon, RocketIcon, UserIcon } from "./assets/icons";

const { Content, Footer, Header } = Layout;
const { Title } = Typography;

export default function App() {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <Layout>
        <Header>
          <Flex gap={50} justify="center" align="center" style={iconsGroup}>
            <UserIcon style={iconStyles} />
            <FolderIcon style={iconStyles} />
            <BulbIcon style={iconStyles} />
            <RocketIcon style={iconStyles} />
          </Flex>
        </Header>

        <Content>
          <Title>Kevin Rebakure</Title>
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
