import { type AxiosRequestConfig, type AxiosResponse } from "axios";
import { axiosInstance } from "./axios-config";

interface APIClientProps {
  path: string;
  params?: AxiosRequestConfig;
  version?: string;
}

export class APIClient {
  /**
   * This static async function in TypeScript sends a GET request using Axios with the specified path
   * and parameters.
   * @param {APIClientProps}  - The parameters for the `get` function are as follows:
   * @returns The `get` method is returning a Promise that resolves to an AxiosResponse object.
   */
  static async get<T>({
    path,
    params,
    version,
  }: APIClientProps): Promise<AxiosResponse<T>> {
    return await axiosInstance.get<T>(path, params);
  }

  /**
   * This function is a static method in TypeScript that makes a POST request using Axios and returns a
   * Promise with the response.
   * @param {APIClientProps}  - The parameters for the `post` function are as follows:
   * @returns The `post` method is returning a Promise that resolves to an AxiosResponse object.
   */
  static async post<T>({
    path,
    params,
    version,
  }: APIClientProps): Promise<AxiosResponse<T>> {
    return await axiosInstance.post<T>(path, params);
  }

  static async put() { }
  static async patch() { }
  static async delete() { }
}
