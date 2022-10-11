export interface IHttp {
  get: <T>(path: string, parameters: unknown) => Promise<T>;
  post: <T>(path: string, body: unknown, parameters: unknown) => Promise<T>;
}
