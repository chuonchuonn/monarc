// Cloudflare Worker entrypoint for serving static HTML files
export default {
  async fetch(request, env, ctx) {
    // Get the URL path
    const url = new URL(request.url);
    let pathname = url.pathname;

    // Default to index.html for root path
    if (pathname === '/') {
      pathname = '/index.html';
    }

    // Get the asset from KV namespace
    try {
      // Try to fetch the requested file
      const asset = await env.ASSETS.get(pathname);
      if (asset) {
        return new Response(asset, {
          headers: {
            'Content-Type': getContentType(pathname),
            'Cache-Control': 'public, max-age=3600'
          }
        });
      }

      // If file not found, try index.html
      const indexAsset = await env.ASSETS.get('/index.html');
      if (indexAsset) {
        return new Response(indexAsset, {
          status: 200,
          headers: {
            'Content-Type': 'text/html',
            'Cache-Control': 'public, max-age=3600'
          }
        });
      }

      return new Response('Not Found', { status: 404 });
    } catch (err) {
      return new Response('Internal Server Error: ' + err.message, { status: 500 });
    }
  }
};

function getContentType(filename) {
  if (filename.endsWith('.html')) return 'text/html';
  if (filename.endsWith('.css')) return 'text/css';
  if (filename.endsWith('.js')) return 'application/javascript';
  if (filename.endsWith('.json')) return 'application/json';
  if (filename.endsWith('.svg')) return 'image/svg+xml';
  if (filename.endsWith('.png')) return 'image/png';
  if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) return 'image/jpeg';
  if (filename.endsWith('.gif')) return 'image/gif';
  if (filename.endsWith('.ico')) return 'image/x-icon';
  return 'application/octet-stream';
}
