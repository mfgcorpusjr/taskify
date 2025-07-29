import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import Section from "@/components/common/Section";
import PreferencesItem from "@/components/settings/PreferencesItem";
import IconButton from "@/components/ui/IconButton";

export default function Preferences() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotifications, setIsNotifications] = useState(false);
  const [autoSync, setAutoSync] = useState(false);

  return (
    <Section title="Preferences">
      <PreferencesItem
        icon={
          <IconButton icon={<Ionicons name="moon" size={22} color="white" />} />
        }
        title="Dark Mode"
        switchType="primary"
        value={isDarkMode}
        onValueChange={setIsDarkMode}
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
