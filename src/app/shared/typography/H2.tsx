import { Grid, Typography } from "antd";

const { Title: AntTitle } = Typography;
const { useBreakpoint } = Grid;

type TextProps = React.ComponentProps<typeof AntTitle>;

type Props = TextProps & {
  children: string;
};

export default function H2({ children, ...restProps }: Props) {
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

  const { style, ...otherProps } = restProps;
  const baseFontSize: React.CSSProperties = { fontSize: fontSizes[breakpoint] };

  const styles = { ...baseFontSize, ...(style || {}) };

  return (
    <AntTitle level={2} {...otherProps} style={styles}>
      {children}
    </AntTitle>
  );
}
