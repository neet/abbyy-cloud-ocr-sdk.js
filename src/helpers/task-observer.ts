import { Task } from "../components/schemas";

export interface TaskObserver {
  observe(taskId: string): AsyncIterable<Task>;
}
