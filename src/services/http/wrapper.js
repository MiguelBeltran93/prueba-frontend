import axios from 'axios';
import wrapperSuccessResponse from './WrapperSuccessResponse';
import wrapperErrorResponse from './WrapperErrorResponse';

/**
 *
 * @returns {{Accept: string}}
 */
const defaultHeaders = () => ({
  Accept: 'application/json',
});
/**
 *
 * @param opts
 * @param elementLoading
 * @param noError
 * @returns {Promise<unknown>}
 */
const wrapper = (opts) => {
  const callBack = (result, reject) => {
    axios(opts)
      .then((response) => result(wrapperSuccessResponse(response)))
      .catch((error) => reject(wrapperErrorResponse(error)));
  };
  return new Promise(callBack);
};

/**
 *
 * @param body
 * @param url
 * @param headers
 * @param noError
 * @returns {Promise<unknown>}
 */
export const post = (body, url, headers = {}, noError) =>
  wrapper(
    {
      method: 'POST',
      url,
      data: body,
      headers: { ...defaultHeaders(), ...headers },
    },
    'default',
    noError
  );
/**
 *
 * @param url
 * @param headers
 * @param resposeType
 * @param elementLoading
 * @param noError
 * @returns {Promise<unknown>}
 */
export const get = (
  url,
  headers = {},
  resposeType = 'json',
  elementLoading,
  noError
) =>
  wrapper(
    {
      method: 'get',
      url,
      headers: { ...defaultHeaders(), ...headers },
      data: {},
      resposeType,
    },
    elementLoading,
    noError
  );
/**
 *
 * @param url
 * @param body
 * @param headers
 * @param noError
 * @returns {Promise<unknown>}
 */
export const del = (url, body, headers = {}, noError) =>
  wrapper(
    {
      method: 'delete',
      url,
      headers: { ...defaultHeaders(), ...headers },
      data: body,
    },
    'default',
    noError
  );

/**
 *
 * @param body
 * @param url
 * @param headers
 * @param noError
 * @returns {Promise<unknown>}
 */
export const put = (body, url, headers = {}, noError) =>
  wrapper(
    {
      method: 'put',
      url,
      data: body,
      headers: { ...defaultHeaders(), ...headers },
    },
    'default',
    noError
  );
