import { Grid, Typography } from "antd";

const { Title: AntTitle } = Typography;
const { useBreakpoint } = Grid;

type TextProps = React.ComponentProps<typeof AntTitle>;

type Props = TextProps & {
  children: string;
};

export default function H4({ children, ...restProps }: Props) {
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

  const { style, ...otherProps } = restProps;
  const baseFontSize: React.CSSProperties = { fontSize: fontSizes[breakpoint] };

  const styles = { ...baseFontSize, ...(style || {}) };

  return (
    <AntTitle level={4} {...otherProps} style={styles}>
      {children}
    </AntTitle>
  );
}
