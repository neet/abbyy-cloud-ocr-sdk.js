export interface IHttp {
	get<T>(path: string, params: unknown): Promise<T>;
	post<T>(path: string, params: unknown, body: unknown): Promise<T>;
}
