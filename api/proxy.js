export default async function handler(req, res) {
  const target = 'https://your-backend.up.railway.app'; // твой бекенд

  try {
    const apiPath = req.url.replace(/^\/api/, '');
    const url = target + apiPath;

    // Копируем заголовки, но удаляем Content-Length и Host
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

    // Пробрасываем статус и заголовки
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
