import { ClientV2 } from "../client";
import { Task } from "../components";
import { delay } from "./delay";
import { TaskObserver } from "./task-observer";

export class TaskObserverPolling implements TaskObserver {
  public constructor(private readonly _client: ClientV2) {}

  public async *observe(taskId: string): AsyncIterable<Task> {
    while (true) {
      const task = await this._client.getTaskStatus({ taskId });
      yield task;

      if (
        task.status === "InProgress" ||
        task.status === "Queued" ||
        task.status === "Submitted"
      ) {
        await delay(Math.max(task.requestStatusDelay, 100));
        continue;
      }

      return;
    }
  }
}
