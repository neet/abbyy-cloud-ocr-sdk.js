/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import type { IHttp } from "./http";

export class HttpFetch implements IHttp {
  public constructor(
    private readonly _baseUrl: string,
    private readonly _applicationId: string,
    private readonly _password: string
  ) {}

  public async get<T>(
    path: string,
    parameters: Record<string, unknown> = {}
  ): Promise<T> {
    return this._request(path, parameters, { method: "GET" });
  }

  public async post<T>(
    path: string,
    body?: unknown,
    parameters: Record<string, unknown> = {}
  ): Promise<T> {
    return this._request(path, parameters, {
      method: "POST",
      body: body as BodyInit,
    });
  }

  private async _request<T>(
    path: string,
    parameters: Record<string, unknown>,
    init: RequestInit
  ): Promise<T> {
    const auth = `${this._applicationId}:${this._password}`;
    const base64 = Buffer.from(auth).toString("base64");

    const url = new URL(path, this._baseUrl);
    for (const [key, value] of Object.entries(parameters)) {
      url.searchParams.set(key, value as string);
    }

    const data = await fetch(url, {
      ...init,
      headers: { ...init.headers, Authorization: `Basic ${base64}` },
    });

    if (!data.ok) {
      throw await data.json();
    }

    return (await data.json()) as T;
  }
}
