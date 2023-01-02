import { ClientV2 } from "./client";
import { HttpFetch } from "./http";

export interface CreateClientParameters {
  readonly baseUrl: string;
  readonly applicationId: string;
  readonly password: string;
}

export const createClient = (parameters: CreateClientParameters): ClientV2 => {
  const http = new HttpFetch(
    parameters.baseUrl,
    parameters.applicationId,
    parameters.password
  );
  return new ClientV2(http);
};
