export const config = {
  api: {
    bodyParser: false, // важно — отключаем встроенный парсер Vercel
  },
};

export default async function handler(req, res) {
  const target = 'https://phone-shop-production.up.railway.app';

  try {
    const apiPath = req.url; // оставляем /api/auth/register
    const url = target + apiPath;

    console.log('Forwarding to:', url);

    // Собираем тело запроса вручную
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = Buffer.concat(chunks);

    // Убираем потенциально конфликтные заголовки
    const headers = { ...req.headers };
    delete headers['host'];
    delete headers['content-length'];

    // Делаем реальный запрос на бекенд
    const response = await fetch(url, {
      method: req.method,
      headers,
      body: req.method === 'GET' || req.method === 'HEAD' ? undefined : body,
    });

    // Пробрасываем ответ клиенту
    res.status(response.status);
    for (const [key, value] of response.headers.entries()) {
      res.setHeader(key, value);
    }

    const responseBuffer = await response.arrayBuffer();
    res.send(Buffer.from(responseBuffer));
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Internal proxy error', details: error.message });
  }
}
