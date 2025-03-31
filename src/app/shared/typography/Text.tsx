import { Grid, Typography } from "antd";

const { Text: AntText } = Typography;
const { useBreakpoint } = Grid;

type Props = {
  children: string;
  style?: React.CSSProperties;
};

export default function Text({ children, style }: Props) {
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
    md: "1rem",
    lg: "1rem",
    xl: "1rem",
    xxl: "1rem",
  };

  return (
    <AntText style={{ ...style, fontSize: fontSizes[breakpoint] }}>
      {children}
    </AntText>
  );
}
