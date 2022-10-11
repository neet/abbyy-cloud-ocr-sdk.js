import {
  DeleteTaskParams,
  GetTaskStatusParams,
  ListTasksParams,
  ProcessBarcodeField,
  ProcessBusinessCard,
  ProcessCheckmarkField,
  ProcessDocumentParams,
  ProcessFieldsParams,
  ProcessImageParams,
  ProcessTextFieldParams,
  SubmitImageParams,
} from "../components/request-bodies";
import { ApplicationInfo, Task, TaskList } from "../components";
import { HttpFetch } from "../http";
import { IClientV2 } from "./client";

export class ClientV2 implements IClientV2 {
  private readonly _http: HttpFetch;

  public constructor(baseUrl: string, applicationId: string, password: string) {
    this._http = new HttpFetch(baseUrl, applicationId, password);
  }

  public processImage(
    image: BodyInit,
    params?: ProcessImageParams
  ): Promise<Task> {
    return this._http.post("/v2/processImage", image, params);
  }

  public submitImage(
    image: BodyInit,
    params?: SubmitImageParams
  ): Promise<Task> {
    return this._http.post("/v2/submitImage", image, params);
  }

  public processDocument(params: ProcessDocumentParams): Promise<Task> {
    return this._http.post("/v2/processDocument", undefined, params);
  }

  public processBusinessCard(
    image: BodyInit,
    params?: ProcessBusinessCard
  ): Promise<Task> {
    return this._http.post("/v2/processBusinessCard", image, params);
  }

  public processTextField(
    image: BodyInit,
    params?: ProcessTextFieldParams
  ): Promise<Task> {
    return this._http.post("/v2/processTextField", image, params);
  }

  public processCheckmarkField(
    image: BodyInit,
    params?: ProcessCheckmarkField
  ): Promise<Task> {
    return this._http.post("/v2/processChekmarkField", image, params);
  }

  public processBarcodeField(
    image: BodyInit,
    params?: ProcessBarcodeField
  ): Promise<Task> {
    return this._http.post("/v2/processBarcodeField", image, params);
  }

  public processFields(params: ProcessFieldsParams): Promise<Task> {
    return this._http.post("/v2/processFields", undefined, params);
  }

  public processMRZ(image: BodyInit): Promise<Task> {
    return this._http.post("/v2/processMRZ", image);
  }

  public getTaskStatus(params: GetTaskStatusParams): Promise<Task> {
    return this._http.get("/v2/getTaskStatus", params);
  }

  public deleteTask(params: DeleteTaskParams): Promise<Task> {
    return this._http.post("/v2/deleteTask", undefined, params);
  }

  public listFinishedTasks(params?: ListTasksParams): Promise<TaskList> {
    return this._http.get("/v2/listFinishedTasks", params);
  }

  public listTasks(params?: ListTasksParams): Promise<TaskList> {
    return this._http.get("/v2/listFinishedTasks", params);
  }

  public getApplicationInfo(): Promise<ApplicationInfo> {
    return this._http.get("/v2/getApplicationInfo");
  }
}
