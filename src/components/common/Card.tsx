import { PropsWithChildren } from "react";
import { StyleSheet, View, StyleProp, ViewStyle } from "react-native";

import { useThemeContext } from "@/providers/ThemeProvider";

type Type = "primary" | "info" | "success" | "warning" | "danger";

type CardProps = {
  borderType?: Type;
};

export default function Card({
  borderType,
  children,
}: PropsWithChildren<CardProps>) {
  const { colors } = useThemeContext();

  const borderTypeStyle: Record<Type, StyleProp<ViewStyle>> = {
    primary: {
      borderLeftWidth: 4,
      borderLeftColor: colors.primary,
    },
    info: {
      borderLeftWidth: 4,
      borderLeftColor: colors.info,
    },
    success: {
      borderLeftWidth: 4,
      borderLeftColor: colors.success,
    },
    warning: {
      borderLeftWidth: 4,
      borderLeftColor: colors.warning,
    },
    danger: {
      borderLeftWidth: 4,
      borderLeftColor: colors.danger,
    },
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.container },
        borderType && borderTypeStyle[borderType],
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 12,
  },
});
