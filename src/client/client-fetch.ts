/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import type { ApplicationInfo, Task, TaskList } from "../components";
import type {
  DeleteTaskParameters,
  GetTaskStatusParameters,
  ListTasksParameters,
  ProcessBarcodeFieldParameters,
  ProcessBusinessCardParameters,
  ProcessCheckmarkFieldParameters,
  ProcessDocumentParameters,
  ProcessFieldsParameters,
  ProcessImageParameters,
  ProcessTextFieldParameters,
  SubmitImageParameters,
} from "../components/request-bodies";
import { HttpFetch } from "../http";
import type { IClientV2 } from "./client";

export class ClientV2 implements IClientV2 {
  private readonly _http: HttpFetch;

  public constructor(baseUrl: string, applicationId: string, password: string) {
    this._http = new HttpFetch(baseUrl, applicationId, password);
  }

  public async processImage(
    image: unknown,
    parameters?: ProcessImageParameters
  ): Promise<Task> {
    return this._http.post("/v2/processImage", image, parameters);
  }

  public async submitImage(
    image: unknown,
    parameters?: SubmitImageParameters
  ): Promise<Task> {
    return this._http.post("/v2/submitImage", image, parameters);
  }

  public async processDocument(
    parameters: ProcessDocumentParameters
  ): Promise<Task> {
    return this._http.post("/v2/processDocument", undefined, parameters);
  }

  public async processBusinessCard(
    image: unknown,
    parameters?: ProcessBusinessCardParameters
  ): Promise<Task> {
    return this._http.post("/v2/processBusinessCard", image, parameters);
  }

  public async processTextField(
    image: unknown,
    parameters?: ProcessTextFieldParameters
  ): Promise<Task> {
    return this._http.post("/v2/processTextField", image, parameters);
  }

  public async processCheckmarkField(
    image: unknown,
    parameters?: ProcessCheckmarkFieldParameters
  ): Promise<Task> {
    return this._http.post("/v2/processCheckmarkField", image, parameters);
  }

  public async processBarcodeField(
    image: unknown,
    parameters?: ProcessBarcodeFieldParameters
  ): Promise<Task> {
    return this._http.post("/v2/processBarcodeField", image, parameters);
  }

  public async processFields(
    parameters: ProcessFieldsParameters
  ): Promise<Task> {
    return this._http.post("/v2/processFields", undefined, parameters);
  }

  public async processMRZ(image: unknown): Promise<Task> {
    return this._http.post("/v2/processMRZ", image);
  }

  public async getTaskStatus(
    parameters: GetTaskStatusParameters
  ): Promise<Task> {
    return this._http.get("/v2/getTaskStatus", parameters);
  }

  public async deleteTask(parameters: DeleteTaskParameters): Promise<Task> {
    return this._http.post("/v2/deleteTask", undefined, parameters);
  }

  public async listFinishedTasks(
    parameters?: ListTasksParameters
  ): Promise<TaskList> {
    return this._http.get("/v2/listFinishedTasks", parameters);
  }

  public async listTasks(parameters?: ListTasksParameters): Promise<TaskList> {
    return this._http.get("/v2/listTasks", parameters);
  }

  public async getApplicationInfo(): Promise<ApplicationInfo> {
    return this._http.get("/v2/getApplicationInfo");
  }
}
