export interface IHttp {
  readonly get: <T>(path: string, parameters?: unknown) => Promise<T>;
  readonly post: <T>(
    path: string,
    body: unknown,
    parameters?: unknown
  ) => Promise<T>;
}
