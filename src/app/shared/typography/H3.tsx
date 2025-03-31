import { Grid, Typography } from "antd";

const { Title: AntTitle } = Typography;
const { useBreakpoint } = Grid;

type Props = {
  children: string;
  style?: React.CSSProperties;
};

export default function H3({ children, style }: Props) {
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
    xs: "1.2rem",
    sm: "1.2rem",
    md: "1.728rem",
    lg: "2.074rem",
    xl: "2.074rem",
    xxl: "2.441rem",
  };

  return (
    <AntTitle level={3} style={{ ...style, fontSize: fontSizes[breakpoint] }}>
      {children}
    </AntTitle>
  );
}
