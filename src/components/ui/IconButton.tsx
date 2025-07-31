import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import { useThemeContext } from "@/providers/ThemeProvider";

type Type = "primary" | "info" | "success" | "warning" | "danger";

type Size = "sm" | "md" | "lg";

const sizeStyle: Record<Size, StyleProp<ViewStyle>> = {
  sm: {
    padding: 6,
    width: 32,
    height: 32,
  },
  md: {
    padding: 8,
    width: 40,
    height: 40,
  },
  lg: {
    padding: 10,
    width: 48,
    height: 48,
  },
};

type ButtonIconProps = {
  icon: React.ReactNode;
  rounded?: boolean;
  type?: Type;
  size?: Size;
} & PressableProps;

export default function IconButton({
  icon,
  rounded,
  type = "primary",
  size = "md",
  ...rest
}: ButtonIconProps) {
  const { colors } = useThemeContext();

  const styles: StyleProp<ViewStyle> = [
    {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: rounded ? 100 : 12,
      backgroundColor: colors[type],
      opacity: rest.disabled ? 0.5 : 1,
    },
    sizeStyle[size],
  ];

  return (
    <Pressable {...rest} style={styles}>
      {icon}
    </Pressable>
  );
}
