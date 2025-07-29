import Ionicons from "@expo/vector-icons/Ionicons";

import Section from "@/components/common/Section";
import IconButton from "@/components/ui/IconButton";
import ProgressStatsItem from "@/components/settings/ProgressStatsItem";

export default function ProgressStats() {
  return (
    <Section title="Progress Stats">
      <ProgressStatsItem
        icon={
          <IconButton
            icon={<Ionicons name="list" size={22} color="white" />}
            rounded
          />
        }
        title={4}
        subTitle="Total Todos"
        borderType="primary"
      />

      <ProgressStatsItem
        icon={
          <IconButton
            icon={<Ionicons name="checkmark" size={22} color="white" />}
            type="success"
            rounded
          />
        }
        title={2}
        subTitle="Completed"
        borderType="success"
      />

      <ProgressStatsItem
        icon={
          <IconButton
            icon={<Ionicons name="time" size={22} color="white" />}
            type="warning"
            rounded
          />
        }
        title={2}
        subTitle="Active"
        borderType="warning"
      />
    </Section>
  );
}
