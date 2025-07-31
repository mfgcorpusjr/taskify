import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useQuery } from "@tanstack/react-query";

import Header from "@/components/common/Header";
import IconButton from "@/components/ui/IconButton";
import ProgressBar from "@/components/home/ProgressBar";
import CreateTodoForm from "@/components/home/CreateTodoForm";

import * as TodosAPI from "@/api/todos";

export default function HomeHeader() {
  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: TodosAPI.getTodos,
  });

  const totalTodos = data?.length || 0;
  const completedTodos = data?.filter((d) => d.is_completed).length || 0;
  const progressBarValue = !!totalTodos
    ? Math.floor((completedTodos / totalTodos) * 100)
    : 0;

  return (
    <View style={{ gap: 20 }}>
      <Header
        icon={
          <IconButton
            icon={<Ionicons name="flash" size={26} color="white" />}
            size="lg"
            type="info"
          />
        }
        title="Today's Tasks 👀"
        subTitle={`${completedTodos} of ${totalTodos} completed`}
      />

      <ProgressBar value={progressBarValue} />

      <CreateTodoForm />
    </View>
  );
}
