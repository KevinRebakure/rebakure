import { Grid, Typography } from "antd";

const { Title: AntTitle } = Typography;
const { useBreakpoint } = Grid;

type Props = {
  children: string;
  style?: React.CSSProperties;
};

export default function H1({ children, style }: Props) {
  const screens = useBreakpoint();

  const breakpoint = screens.xxl
    ? "xxl"
    : screens.xl
    ? "xl"
    : screens.lg
    ? "lg"
    : screens.md
    ? "md"
    : screens.sm
    ? "sm"
    : "xs";

  const fontSizes: Record<string, string> = {
    xs: "1.728rem",
    sm: "1.728rem",
    md: "2.488rem",
    lg: "2.986rem",
    xl: "2.986rem",
    xxl: "3.815rem",
  };

  return (
    <AntTitle level={1} style={{ ...style, fontSize: fontSizes[breakpoint] }}>
      {children}
    </AntTitle>
  );
}
