import Icon from "@ant-design/icons";
import { Flex, GetProps } from "antd";
import styled from "styled-components";
import { UserIcon, FolderIcon, BulbIcon, RocketIcon } from "../assets/icons";

type NavBarIconProps = {
  icon: React.FC;
} & Partial<GetProps<typeof Icon>>;

const StyledIcon = styled(Icon)`
  transition: color 0.3s ease;
  color: white;
  font-size: 32px;
  cursor: pointer;

  &:hover {
    color: #1890ff;
  }

  svg {
    fill: currentColor;
  }
`;

function NavBarIcon({ icon: IconComponent, ...props }: NavBarIconProps) {
  return <StyledIcon component={IconComponent} {...props} />;
}

const navBarIcons = [
  { label: "user", icon: UserIcon },
  { label: "folder", icon: FolderIcon },
  { label: "bulb", icon: BulbIcon },
  { label: "rocket", icon: RocketIcon },
];

export default function NavBarIcons() {
  return (
    <Flex gap={50} justify="center" align="center" style={{ height: "100%" }}>
      {navBarIcons.map(({ label, icon }) => (
        <NavBarIcon key={label} icon={icon} />
      ))}
    </Flex>
  );
}
