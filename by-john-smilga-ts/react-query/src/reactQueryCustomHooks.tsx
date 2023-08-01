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

// useCreateTask hook
export const useCreateTask = () => {
  const queryClient = useQueryClient();

  const { mutate: createTask, isLoading } = useMutation<Task, Error, string>(
    async (taskTitle: string) => {
      const { data } = await customFetch.post<Task>("/", { title: taskTitle });
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
        toast.success("task added");
      },
      onError: (error) => {
        toast.error(error.message ?? "An error occurred.");
      },
    }
  );

  return { createTask, isLoading };
};

// useEditTask hook
export const useEditTask = () => {
  const queryClient = useQueryClient();

  const { mutate: editTask } = useMutation<
    void,
    Error,
    { taskId: number; isDone: boolean }
  >(
    async ({ taskId, isDone }) => {
      try {
        await customFetch.patch(`/${taskId}`, { isDone });
      } catch (error) {
        throw new Error("An error occurred while updating the task.");
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
      },
    }
  );

  return { editTask };
};

// useDeleteTask hook
export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, isLoading: deleteTaskLoading } = useMutation<
    void,
    Error,
    number
  >(
    async (taskId: number) => {
      try {
        await customFetch.delete(`/${taskId}`);
      } catch (error) {
        throw new Error("An error occurred while deleting the task.");
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
      },
    }
  );

  return { deleteTask, deleteTaskLoading };
};
