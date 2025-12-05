// Simple Cloudflare Worker for monarc
// This worker simply passes through requests to Cloudflare Pages
export default {
  async fetch(request) {
    return fetch(request);
  }
};
