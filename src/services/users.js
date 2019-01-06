import http from '../utils/http';

/**
 * Get list of user from firebase api.
 *
 * @returns Promise<data>
 */
export async function getUsers() {
  return await http.get('https://us-central1-school-ef9c0.cloudfunctions.net/getUsers');
}
