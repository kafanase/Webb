export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/generate_204.js" || url.pathname === "/generate_204") {
      return new Response(null, {
        status: 204,
        statusText: 'No Content',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache'
        }
      });
    }

    return fetch(request);
  }
};
