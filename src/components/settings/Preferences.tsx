import { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import Section from "@/components/common/Section";
import PreferencesItem from "@/components/settings/PreferencesItem";
import IconButton from "@/components/ui/IconButton";

import { useThemeContext } from "@/providers/ThemeProvider";

export default function Preferences() {
  const { theme, toggleTheme } = useThemeContext();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotifications, setIsNotifications] = useState(false);
  const [autoSync, setAutoSync] = useState(false);

  useEffect(() => {
    if (theme) setIsDarkMode(theme === "dark");
  }, [theme]);

  return (
    <Section title="Preferences">
      <PreferencesItem
        icon={
          <IconButton icon={<Ionicons name="moon" size={22} color="white" />} />
        }
        title="Dark Mode"
        switchType="primary"
        value={isDarkMode}
        onValueChange={toggleTheme}
      />

      <PreferencesItem
        icon={
          <IconButton
            icon={<Ionicons name="notifications" size={22} color="white" />}
            type="success"
          />
        }
        title="Notifications"
        switchType="success"
        value={isNotifications}
        onValueChange={setIsNotifications}
      />

      <PreferencesItem
        icon={
          <IconButton
            icon={<Ionicons name="sync" size={22} color="white" />}
            type="warning"
          />
        }
        title="Auto Sync"
        switchType="warning"
        value={autoSync}
        onValueChange={setAutoSync}
      />
    </Section>
  );
}
