import type {
  DeleteTaskParameters,
  GetTaskStatusParameters,
  ListTasksParameters,
  ProcessBarcodeFieldParameters,
  ProcessBusinessCardParameters,
  ProcessCheckmarkFieldParameters,
  ProcessDocumentParameters,
  ProcessFieldsParameters,
  ProcessTextFieldParameters,
  SubmitImageParameters,
} from "../components/request-bodies";
import type { ApplicationInfo, Task, TaskList } from "../components/schemas";

export interface IClientV2 {
  submitImage: (
    image: unknown,
    parameters?: SubmitImageParameters
  ) => Promise<Task>;

  processDocument: (parameters: ProcessDocumentParameters) => Promise<Task>;

  processBusinessCard: (
    image: unknown,
    parameters?: ProcessBusinessCardParameters
  ) => Promise<Task>;

  processTextField: (
    image: unknown,
    parameters?: ProcessTextFieldParameters
  ) => Promise<Task>;

  processCheckmarkField: (
    image: unknown,
    parameters?: ProcessCheckmarkFieldParameters
  ) => Promise<Task>;

  processBarcodeField: (
    image: unknown,
    parameters?: ProcessBarcodeFieldParameters
  ) => Promise<Task>;

  processFields: (parameters: ProcessFieldsParameters) => Promise<Task>;

  processMRZ: (image: unknown) => Promise<Task>;

  getTaskStatus: (parameters: GetTaskStatusParameters) => Promise<Task>;

  deleteTask: (parameters: DeleteTaskParameters) => Promise<Task>;

  listFinishedTasks: (parameters?: ListTasksParameters) => Promise<TaskList>;

  listTasks: (parameters?: ListTasksParameters) => Promise<TaskList>;

  getApplicationInfo: () => Promise<ApplicationInfo>;
}
