export type ParamQuery = Record<string, string | number | Array<string | number>>;

function queryStringify(data: ParamQuery | undefined) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`, '?');
}
export { queryStringify };
