const BASE_URL = "https://api.snapvideodownloader.com/api";
// const BASE_URL = "http://localhost:4000/api";

/**
 * Fetches snapchat data from the API
 * @param {string} snapchatUserData - The snapchat user data to be used as target parameter
 * @returns {Promise<any>} - Returns the API response data as-is
 * @throws {Error} - Throws error if API call fails
 */
export async function fetchSnapchatData(snapchatUserData) {
  try {
    const url = `${BASE_URL}/snaps?target=${encodeURIComponent(snapchatUserData)}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log("received data is",data);
    return data;
    
  } catch (error) {
    console.error('Error fetching snapchat data:', error);
    throw error;
  }
}


/**
 * Triggers a download for the given backend download URL.
 * @param {string} downloadUrlFromServer - The relative download path from the server (e.g., /api/media/...).
 * @throws {Error} - Throws an error if the download fails.
 */
export function downloadVideoFromUrl(downloadUrlFromServer) {
  try {
    // The BASE_URL is 'http://localhost:4000/api', and the downloadUrlFromServer is '/api/media/...'
    // We need to construct the URL from the root.
    const serverRoot = new URL(BASE_URL).origin;
    const fullUrl = `${serverRoot}${downloadUrlFromServer}`;

    // Extract filename from the URL's query parameters
    const urlParams = new URLSearchParams(fullUrl.split('?')[1]);
    const filename = urlParams.get('filename') || 'snapchat-video.mp4';

    const link = document.createElement("a");
    link.href = fullUrl;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading video:', error);
    throw error;
  }
}