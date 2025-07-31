import { Alert, AlertButton } from "react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import * as TodosAPI from "@/api/todos";

const useResetApp = (totalTodos: number) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: TodosAPI.deleteTodos,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });

      Alert.alert(
        "App Reset",
        `Successfully deleted ${data.length} todo${
          data.length > 1 ? "s" : ""
        }. Your app has been reset.`
      );
    },
    onError: (error) => {
      console.log(error.message);
      Alert.alert("Error", "Failed to reset app");
    },
  });

  const handleResetApp = () => {
    let title = "";
    let message = "";
    let buttons: AlertButton[] = [];

    if (totalTodos > 0) {
      title = "Reset App";
      message =
        "⚠️ This will delete ALL your todos permanently. This action cannot be undone.";
      buttons = [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete All",
          style: "destructive",
          onPress: () => mutate(),
        },
      ];
    } else {
      title = "Nothing to Delete";
      message =
        "You don't have any todos right now. Add some todos first before trying to reset them.";
      buttons = [{ text: "Ok" }];
    }

    Alert.alert(title, message, buttons);
  };

  return {
    resetApp: handleResetApp,
  };
};

export default useResetApp;
