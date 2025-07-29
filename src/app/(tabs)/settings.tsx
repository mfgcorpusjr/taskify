import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import Header from "@/components/common/Header";
import IconButton from "@/components/ui/IconButton";
import ProgressStats from "@/components/settings/ProgressStats";
import Preferences from "@/components/settings/Preferences";
import DangerZone from "@/components/settings/DangerZone";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Header
          icon={
            <IconButton
              icon={<Ionicons name="settings" size={26} color="white" />}
              size="lg"
              type="info"
            />
          }
          title="Settings"
        />

        <ProgressStats />

        <Preferences />

        <DangerZone />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  scrollView: {
    flexGrow: 1,
    gap: 40,
  },
});
