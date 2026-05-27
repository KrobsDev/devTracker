import { type AxiosRequestConfig, type AxiosResponse } from "axios"
import { axiosInstance } from "./axios-config"

interface BaseRequestProps {
  path: string
  config?: AxiosRequestConfig
  version?: string
}

interface MutationRequestProps extends BaseRequestProps {
  payload?: Record<string, any>
}

export interface PaginatedResponse<T> {
  count: number
  next: string
  previous: string
  results: T[]
}

export class APIClient {
  /**
   * This static async function in TypeScript sends a GET request using Axios with the specified path
   * and parameters.
   * @param {BaseRequestProps}  - The parameters for the `get` function are as follows:
   * @returns The `get` method is returning a Promise that resolves to an AxiosResponse object.
   */
  static async get<T>({
    path,
    config,
    version,
  }: BaseRequestProps): Promise<AxiosResponse<T>> {
    return await axiosInstance.get<T>(path, config)
  }

  /**
   * This function is a static method in TypeScript that makes a POST request using Axios and returns a
   * Promise with the response.
   * @param {BaseRequestProps}  - The parameters for the `post` function are as follows:
   * @returns The `post` method is returning a Promise that resolves to an AxiosResponse object.
   */
  static async post<T>({
    path,
    payload,
    config,
    version,
  }: MutationRequestProps): Promise<AxiosResponse<T>> {
    return await axiosInstance.post<T>(path, payload, config)
  }

  static async put() {}
  static async patch() {}
  static async delete() {}
}
