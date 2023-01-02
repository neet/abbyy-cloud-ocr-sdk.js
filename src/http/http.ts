export interface IHttp {
  readonly get: <T>(
    path: string,
    parameters?: Readonly<Record<string, unknown>>
  ) => Promise<T>;
  readonly post: <T>(
    path: string,
    body: unknown,
    parameters?: Readonly<Record<string, unknown>>
  ) => Promise<T>;
}
