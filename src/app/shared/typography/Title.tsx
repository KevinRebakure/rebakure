import { Grid, Typography } from "antd";

const { Title: AntTitle } = Typography;
const { useBreakpoint } = Grid;

type TextProps = React.ComponentProps<typeof AntTitle>;

type Props = TextProps & {
  children: string;
};

export default function Title({ children, ...restProps }: Props) {
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

  const { style, ...otherProps } = restProps;
  const baseFontSize: React.CSSProperties = { fontSize: fontSizes[breakpoint] };

  const styles = { ...baseFontSize, ...(style || {}) };

  return (
    <AntTitle {...otherProps} style={styles}>
      {children}
    </AntTitle>
  );
}
