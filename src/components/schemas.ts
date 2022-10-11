export type TaskStatus =
  | "Submitted"
  | "Queued"
  | "InProgress"
  | "Completed"
  | "ProcessingFailed"
  | "Deleted"
  | "NotEnoughCredits";

export interface Task {
  taskId: string;
  registrationTime: string;
  statusChangeTime: string;
  status: TaskStatus;
  filesCount: number;
  requestStatusDelay: number;
  resultsUrls: string[];
  description: string;
}

export interface TaskList {
  tasks: Task[];
}

export interface ErrorDetail {
  code: string;
  target: string;
  message: string;
}

/**
 * @see https://support.abbyy.com/hc/en-us/articles/360017326719-HTTP-status-codes-and-response-formats
 */
export interface Error {
  code: string;
  message: string;
  target: string;
  details: ErrorDetail[];
}

export interface ApplicationInfo {
  id: string;
  displayName: string;
  pages: number;
  fields: number;
  expires: string;
  type: string;
}
