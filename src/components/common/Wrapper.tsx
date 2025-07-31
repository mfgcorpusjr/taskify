import { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Wrapper({ children }: PropsWithChildren) {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      {children}
    </SafeAreaView>
  );
}
