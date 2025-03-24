import { ConfigProvider, Flex, Grid, Layout, theme, Typography } from "antd";
import React from "react";
import "./App.css";
import { BulbIcon, FolderIcon, RocketIcon, UserIcon } from "./assets/icons";
import Bio from "./components/Bio";
import FooterContent from "./components/FooterContent";
import Portals from "./components/Portals";
import SkillSet from "./components/SkillSet";

const { Content, Footer, Header } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

export default function App() {
  const screens = useBreakpoint();
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
            <Title
              className="text-2xl! sm:text-3xl! md:text-4xl!"
              style={{
                textAlign: "center",
                paddingTop: screens.sm ? 300 : 50,
                paddingBottom: screens.sm ? 300 : 50,
                fontWeight: "lighter",
                border: "1px solid white",
              }}
            >
              Kevin Rebakure
            </Title>

            <Portals />

            <Title
              style={{
                textAlign: "center",
                paddingTop: 200,
                paddingBottom: 200,
                fontSize: 60,
                fontWeight: "lighter",
              }}
            >
              Let's Learn and Build Stuff Together
            </Title>

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
