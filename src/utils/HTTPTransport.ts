import { queryStringify, ParamQuery } from './queryStringify';

export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
interface IRequestOptions {
  method?: string
  retries?: number
  data?: ParamQuery
  timeout?: number
  headers?: Record<string, string>
}
class HTTPTransport {
  get = (
    url: string,
  ): Promise<XMLHttpRequest> => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(METHODS.GET, url);
    xhr.onload = () => {
      resolve(xhr);
    };
    xhr.onabort = reject;
    xhr.onerror = reject;
    xhr.ontimeout = reject;
    xhr.send();
  });

  post = (url: string, options:IRequestOptions = {}) => this.request(url, { ...options, method: METHODS.POST });

  put = (url: string, options: IRequestOptions = {}) => this.request(url, { ...options, method: METHODS.PUT });

  delete = (url: string, options: IRequestOptions = {}) => this.request(url, { ...options, method: METHODS.DELETE });

  request(
    url: string,
    options: IRequestOptions = {},
    timeout = 5000,
  ): Promise<XMLHttpRequest> {
    const { headers = {}, method, data } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error('No method'));
        return;
      }
      const xhr = new XMLHttpRequest();
      xhr.open(method, `${url}${queryStringify(data)}`);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => {
        resolve(xhr);
      };
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;
      xhr.send(JSON.stringify(data));
    });
  }
}
export { HTTPTransport };
