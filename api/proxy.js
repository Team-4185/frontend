export default async function handler(req, res) {
  const target = 'https://phone-shop-production.up.railway.app'; // ← адрес твоего бекенда

  const url = target + req.url.replace(/^\/api/, '');
  const response = await fetch(url, {
    method: req.method,
    headers: {
      ...req.headers,
      host: new URL(target).host,
    },
    body: req.method !== 'GET' && req.method !== 'HEAD' ? req.body : undefined,
  });

  const data = await response.arrayBuffer();
  res.status(response.status);
  for (const [key, value] of response.headers.entries()) {
    res.setHeader(key, value);
  }
  res.send(Buffer.from(data));
}
