import { IHttp } from "./http";

export class HttpFetch implements IHttp {
  public constructor(
    private readonly _baseUrl: string,
    private readonly _applicationId: string,
    private readonly _password: string
  ) {}

  public async get<T>(path: string, params: unknown = {}): Promise<T> {
    return await this._request(path, params, { method: "GET" });
  }

  public async post<T>(
    path: string,
    body?: BodyInit,
    params: unknown = {}
  ): Promise<T> {
    return await this._request(path, params, { method: "POST", body });
  }

  private async _request<T>(
    path: string,
    params: unknown,
    init: RequestInit
  ): Promise<T> {
    const query = new URLSearchParams(params as string[][]).toString();

    const auth = `${this._applicationId}:${this._password}`;
    const base64 = Buffer.from(auth).toString("base64");

    const data = await fetch(`${this._baseUrl}${path}?${query}`, {
      ...init,
      headers: { ...init.headers, Authorization: `Basic ${base64}` },
    });

    if (!data.ok) {
      throw await data.json();
    }

    return data.json();
  }
}
