import { Grid, Typography } from "antd";

const { Title: AntTitle } = Typography;
const { useBreakpoint } = Grid;

type Props = {
  children: string;
  style?: React.CSSProperties;
};

export default function H4({ children, style }: Props) {
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
    xs: "1rem",
    sm: "1rem",
    md: "1.44rem",
    lg: "1.728rem",
    xl: "1.728rem",
    xxl: "1.953rem",
  };

  return (
    <AntTitle level={4} style={{ ...style, fontSize: fontSizes[breakpoint] }}>
      {children}
    </AntTitle>
  );
}
