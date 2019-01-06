import http from './utils/http';
import * as interceptors from './common/interceptors';

/**
 * Initializes stuff needed for the application.
 *
 * @returns {Promise}
 */
export default async function init() {
  initializeHttpInterceptors();
}

/**
 * Initialize HTTP Interceptors.
 */
function initializeHttpInterceptors() {
  http.interceptors.request.use(interceptors.requestAuthInterceptor);
  http.interceptors.response.use(
    response => response,
    interceptors.unauthorizedResponseHandlerInterceptor
  );
}
