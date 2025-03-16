/**
 * Error interface for standardized server response
 * @interface IAPIResponseError
 * @property {number} code http status code
 * @property {string} id error ID
 * @property {string} name error name
 * @property {string} msid microservice instance ID
 * @property {string} msname microservice name
 * @property {string} message
 * @property {string} description
 * @property {string} type
 */
export interface IAPIResponseError {
  code: number;
  id: string;
  name: string;
  msid: string;
  msname: string;
  message: string;
  description: string;
  type: string;
}

/**
 * Standardized server response metadata interface
 * @interface IAPIResponseMeta
 * @property {number} timestamp UNIX timestamp in milliseconds
 * @property {string} msid microservice instance ID
 * @property {string} msname microservice name
 * @property {Array<IError>} errors
 */
export interface IAPIResponseMeta {
  timestamp: number;
  msid: string;
  msname: string;
  errors: Array<IAPIResponseError> | null;
}

/**
 * Standardized server response interface
 * @interface IAPIResponse
 * @property {IAPIResponseMeta} meta
 * @property {T | null} data
 */
export interface IAPIResponse<T = any>{
  meta: IAPIResponseMeta;
  data: T | null;
}