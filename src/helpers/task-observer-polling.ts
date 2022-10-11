import type { ClientV2 } from "../client";
import type { Task } from "../components";
import { delay } from "./delay";
import type { TaskObserver } from "./task-observer";

export class TaskObserverPolling implements TaskObserver {
  public constructor(private readonly _client: ClientV2) {}

  public async *observe(taskId: string): AsyncIterable<Task> {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
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
