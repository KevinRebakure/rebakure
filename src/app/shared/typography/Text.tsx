import { Grid, Typography } from "antd";
import React from "react";

const { Text: AntText } = Typography;
const { useBreakpoint } = Grid;

type TextProps = React.ComponentProps<typeof AntText>;

type Props = TextProps & {
  children: string;
};

export default function Text({ children, ...restProps }: Props) {
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

  const { style, ...otherProps } = restProps;
  const baseFontSize: React.CSSProperties = { fontSize: fontSizes[breakpoint] };

  const styles = { ...baseFontSize, ...(style || {}) };

  return (
    <AntText {...otherProps} style={styles}>
      {children}
    </AntText>
  );
}
