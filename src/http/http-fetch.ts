/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import type { IHttp } from "./http";

export class HttpFetch implements IHttp {
  public constructor(
    private readonly _baseUrl: string,
    private readonly _applicationId: string,
    private readonly _password: string
  ) {}

  public async get<T>(path: string, parameters: unknown = {}): Promise<T> {
    return this._request(path, parameters, { method: "GET" });
  }

  public async post<T>(
    path: string,
    body?: unknown,
    parameters: unknown = {}
  ): Promise<T> {
    return this._request(path, parameters, {
      method: "POST",
      body: body as BodyInit,
    });
  }

  private async _request<T>(
    path: string,
    parameters: unknown,
    init: RequestInit
  ): Promise<T> {
    const query = new URLSearchParams(parameters as string[][]).toString();

    const auth = `${this._applicationId}:${this._password}`;
    const base64 = Buffer.from(auth).toString("base64");

    const data = await fetch(`${this._baseUrl}${path}?${query}`, {
      ...init,
      headers: { ...init.headers, Authorization: `Basic ${base64}` },
    });

    if (!data.ok) {
      throw await data.json();
    }

    return (await data.json()) as T;
  }
}
