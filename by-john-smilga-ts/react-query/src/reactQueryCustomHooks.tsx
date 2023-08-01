import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";
import { toast } from "react-toastify";

interface Task {
  id: number;
  title: string;
  isDone: boolean;
}

// useFetchTasks hook
export const useFetchTasks = () => {
  const { isLoading, data, isError, error } = useQuery<Task[], Error>({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get<Task[]>("/");
      return data;
    },
  });
  return { isLoading, isError, data };
};
