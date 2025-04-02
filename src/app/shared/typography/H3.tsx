import { Grid, Typography } from "antd";

const { Title: AntTitle } = Typography;
const { useBreakpoint } = Grid;

type TextProps = React.ComponentProps<typeof AntTitle>;

type Props = TextProps & {
  children: string;
};

export default function H3({ children, ...restProps }: Props) {
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

  const { style, ...otherProps } = restProps;
  const baseFontSize: React.CSSProperties = { fontSize: fontSizes[breakpoint] };

  const styles = { ...baseFontSize, ...(style || {}) };

  return (
    <AntTitle level={3} {...otherProps} style={styles}>
      {children}
    </AntTitle>
  );
}
