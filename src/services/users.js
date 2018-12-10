import axios from 'axios';

/**
 * Get list of user from firebase api.
 *
 * @returns Promise<data>
 */
export async function getUsers() {
  try {
    const response = await axios.get('https://us-central1-school-ef9c0.cloudfunctions.net/getUsers');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
