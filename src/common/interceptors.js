/**
 * Interceptor to add Authorization header on the outgoing http requests.
 * Add any headers for each request sent from application.
 *
 * @param {Object} config
 * @returns {Object}
 */
export function requestAuthInterceptor(config) {
  config.headers['Content-Type'] = 'application/json';
  config.headers['user'] = 'test';
  return config;
}

export function unauthorizedResponseHandlerInterceptor(error) {
  return Promise.reject(error);
}
