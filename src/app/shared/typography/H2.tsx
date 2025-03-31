import { Grid, Typography } from "antd";

const { Title: AntTitle } = Typography;
const { useBreakpoint } = Grid;

type Props = {
  children: string;
  style?: React.CSSProperties;
};

export default function H2({ children, style }: Props) {
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
    xs: "1.44rem",
    sm: "1.44rem",
    md: "2.074rem",
    lg: "2.488rem",
    xl: "2.488rem",
    xxl: "3.052rem",
  };

  return (
    <AntTitle level={2} style={{ ...style, fontSize: fontSizes[breakpoint] }}>
      {children}
    </AntTitle>
  );
}
