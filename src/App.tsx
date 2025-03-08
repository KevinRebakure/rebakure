import { Flex, Layout } from "antd";
import BulbIcon from "./assets/icons/BulbIcon";
import FolderIcon from "./assets/icons/FolderIcon";
import RocketIcon from "./assets/icons/RocketIcon";
import UserIcon from "./assets/icons/UserIcon";
import React from "react";

const { Content, Footer, Header } = Layout;

export default function App() {
  return (
    <Layout>
      <Header>
        <Flex gap={50} justify="center" align="center" style={iconsGroup}>
          <UserIcon style={iconStyles} />
          <BulbIcon style={iconStyles} />
          <FolderIcon style={iconStyles} />
          <RocketIcon style={iconStyles} />
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

const iconsGroup: React.CSSProperties = {
  height: "100%",
};
