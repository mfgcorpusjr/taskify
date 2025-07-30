import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import { useThemeContext } from "@/providers/ThemeProvider";

type Type = "primary" | "info" | "success" | "warning" | "danger";

type Size = "sm" | "md" | "lg";

const sizeStyle: Record<Size, StyleProp<ViewStyle>> = {
  sm: {
    padding: 6,
  },
  md: {
    padding: 8,
  },
  lg: {
    padding: 10,
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
      alignSelf: "flex-start",
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
