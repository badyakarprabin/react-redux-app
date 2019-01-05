import axios from 'axios';

/**
 * Get list of user from firebase api.
 *
 * @returns Promise<data>
 */
export async function getUsers() {
    return await axios.get('https://us-central1-school-ef9c0.cloudfunctions.net/getUsers');
}
