import { Card, Flex, Image, Tabs, Typography } from "antd";

interface Item {
  title: string;
  icon: string;
}

const { Title } = Typography;

function SkillSet() {
  return (
    <Flex vertical style={{ width: "80%", margin: "0 auto" }} gap={10}>
      <Title>My Skill Set</Title>
      <Flex>
        <Tabs tabPosition="left" items={array} />
      </Flex>
    </Flex>
  );
}

const Items = ({ placeholders }: { placeholders: Item[] }) => {
  return (
    <Flex gap="middle" wrap>
      {placeholders.map((item: Item) => (
        <Card key={item.title} style={{ padding: 0 }}>
          <Flex gap="middle" align="center">
            <Image width={40} src={item.icon} />
            <Title level={5}>{item.title}</Title>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

const languages = [
  {
    title: "JavaScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png",
  },
  {
    title: "TypeScript",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
  },
  {
    title: "HTML5",
    icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/167_Html5_logo_logos-512.png",
  },
  {
    title: "CSS3",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/900px-Official_CSS_Logo.svg.png",
  },
];

const frontend = [
  {
    title: "React",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/862px-React-icon.svg.png",
  },
  {
    title: "React Router",
    icon: "https://reactrouter.com/_brand/React%20Router%20Brand%20Assets/React%20Router%20Logo/Light.svg",
  },
  {
    title: "Redux",
    icon: "https://cdn.worldvectorlogo.com/logos/redux.svg",
  },
  {
    title: "NextJS",
    icon: "https://cmscritic.com/ms-content/uploads/2023/08/nextjs-product-logo.jpeg",
  },
  {
    title: "TailwindCSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
  },
  {
    title: "Figma",
    icon: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png",
  },
];

const backend = [
  {
    title: "NestJS",
    icon: "https://static-00.iconduck.com/assets.00/nestjs-icon-2048x2040-3rrvcej8.png",
  },
  {
    title: "Express.js",
    icon: "https://img.icons8.com/color/512/express-js.png",
  },
  {
    title: "Node.js",
    icon: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
  },
];

const tools = [
  {
    title: "Git",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
  },
  {
    title: "GitHub",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    title: "Docker",
    icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
  },
  {
    title: "Jest",
    icon: "https://static-00.iconduck.com/assets.00/jest-icon-1855x2048-ifiupldr.png",
  },
  {
    title: "Firebase",
    icon: "https://icon-icons.com/icons2/691/PNG/512/google_firebase_icon-icons.com_61475.png",
  },
];

const databases = [
  {
    title: "Prisma",
    icon: "https://cdn.freelogovectors.net/wp-content/uploads/2022/01/prisma_logo-freelogovectors.net_.png",
  },
  {
    title: "MongoDB",
    icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  {
    title: "PostgreSQL",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
  },
  {
    title: "SQLite",
    icon: "https://images.icon-icons.com/2699/PNG/512/sqlite_logo_icon_169724.png",
  },
];

const array = [
  {
    key: "Programming languages",
    label: "Programming languages",
    children: <Items placeholders={languages} />,
  },
  {
    key: "Front-End",
    label: "Front-End",
    children: <Items placeholders={frontend} />,
  },
  {
    key: "Back-End",
    label: "Back-End",
    children: <Items placeholders={backend} />,
  },
  {
    key: "Databases",
    label: "Databases",
    children: <Items placeholders={databases} />,
  },
  {
    key: "Tools",
    label: "Tools",
    children: <Items placeholders={tools} />,
  },
];

export default SkillSet;
