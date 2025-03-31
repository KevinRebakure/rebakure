"use client";

import { ConfigProvider, Flex, Layout, theme } from "antd";
import React from "react";
import { BulbIcon, FolderIcon, RocketIcon, UserIcon } from "./assets/icons";
import Bio from "./components/Bio";
import FooterContent from "./components/FooterContent";
import Motto from "./components/Motto";
import Portals from "./components/Portals";
import SkillSet from "./components/SkillSet";
import UserName from "./components/UserName";

// This is for fixing some compatibility issues
import "@ant-design/v5-patch-for-react-19";

const { Content, Footer, Header } = Layout;

export default function Page() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        components: {
          Layout: {
            headerBg: "#000",
          },
        },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        >
          <Flex gap={50} justify="center" align="center" style={iconsGroup}>
            <UserIcon style={iconStyles} />
            <FolderIcon style={iconStyles} />
            <BulbIcon style={iconStyles} />
            <RocketIcon style={iconStyles} />
          </Flex>
        </Header>

        <Content style={{ marginBottom: 400 }}>
          <Flex vertical gap={100}>
            <UserName />

            <Portals />

            <Motto />

            <SkillSet />

            <Bio />
          </Flex>
        </Content>

        <Footer>
          <FooterContent />
        </Footer>
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
