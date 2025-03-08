/**
 * Error interface for standardized server response
 * @interface IAPIResponseError
 * @property {string} id error ID to track logs
 * @property {number} code http status code
 * @property {string} name
 * @property {string} message
 * @property {string} description
 * @property {string} type
 */
export interface IAPIResponseError {
  id: string;
  code: number;
  name: string;
  message: string;
  description: string;
  type: string;
}

/**
 * Standardized server response metadata interface
 * @interface IAPIResponseMeta
 * @property {Array<IError>} errors
 * @property {number} timestamp UNIX timestamp in milliseconds
 */
export interface IAPIResponseMeta {
  errors: Array<IAPIResponseError> | null;
  timestamp: number;
}

/**
 * Standardized server response interface
 * @interface IAPIResponse
 * @property {T} data
 * @property {IAPIResponseMeta} meta
 */
export interface IAPIResponse<T = any>{
  data: T | null;
  meta: IAPIResponseMeta;
}