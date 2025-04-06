"use client";

import { ConfigProvider, Layout, theme } from "antd";
import {
  FooterContent,
  Motto,
  NavBarIcons,
  Portals,
  SkillSet,
  Welcome,
} from "./components";
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
          <NavBarIcons />
        </Header>

        <Content style={{ marginBottom: 100 }}>
          <Welcome />

          <Portals />

          <Motto />

          <SkillSet />
        </Content>

        <Footer>
          <FooterContent />
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}
