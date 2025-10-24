export default async function handler(req, res) {
  const target = 'https://phone-shop-production.up.railway.app'; // ← твой бекенд
  console.log('Incoming URL:', req.url);
  console.log('Forwarding to:', target + req.url);
  try {
    const apiPath = req.url; // не обрезаем /api
    const url = target + apiPath;
    console.log('Incoming URL:', req.url);
    console.log('Forwarding to:', target + req.url);
    console.log('Proxy forwarding to:', url);

    const headers = { ...req.headers };
    delete headers['content-length'];
    delete headers['host'];

    const options = {
      method: req.method,
      headers,
    };

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      options.body = Buffer.concat(chunks);
    }

    const response = await fetch(url, options);

    res.status(response.status);
    for (const [key, value] of response.headers.entries()) {
      res.setHeader(key, value);
    }

    const data = await response.arrayBuffer();
    res.send(Buffer.from(data));
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Internal proxy error', details: error.message });
  }
}
