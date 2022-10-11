import {
  DeleteTaskParams,
  GetTaskStatusParams,
  ListTasksParams,
  ProcessBarcodeField,
  ProcessBusinessCard,
  ProcessCheckmarkField,
  ProcessDocumentParams,
  ProcessFieldsParams,
  ProcessTextFieldParams,
  SubmitImageParams,
} from "../components/request-bodies";
import { ApplicationInfo, Task, TaskList } from "../components/schemas";

export interface IClientV2 {
  processDocument(
    image: unknown,
    params?: ProcessDocumentParams
  ): Promise<Task>;

  submitImage(image: unknown, params?: SubmitImageParams): Promise<Task>;

  processDocument(params?: ProcessDocumentParams): Promise<Task>;

  processBusinessCard(
    image: unknown,
    params?: ProcessBusinessCard
  ): Promise<Task>;

  processTextField(
    image: unknown,
    params?: ProcessTextFieldParams
  ): Promise<Task>;

  processCheckmarkField(
    image: unknown,
    params?: ProcessCheckmarkField
  ): Promise<Task>;

  processBarcodeField(
    image: unknown,
    params?: ProcessBarcodeField
  ): Promise<Task>;

  processFields(params: ProcessFieldsParams): Promise<Task>;

  processMRZ(image: unknown): Promise<Task>;

  getTaskStatus(params: GetTaskStatusParams): Promise<Task>;

  deleteTask(params: DeleteTaskParams): Promise<Task>;

  listFinishedTasks(params?: ListTasksParams): Promise<TaskList>;

  listTasks(params?: ListTasksParams): Promise<TaskList>;

  getApplicationInfo(): Promise<ApplicationInfo>;
}
