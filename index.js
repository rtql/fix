module.exports = (req, res) => {
  const { body } = req;

  if (body === undefined || body === null) {
    res.status(200).send('No body content provided.');
    return;
  }

  if (typeof body === 'string' && body.trim() === '') {
    res.status(200).send('Request body is an empty string.');
    return;
  }

  // Check for empty plain object {}
  if (typeof body === 'object' && !Array.isArray(body) && body !== null && Object.keys(body).length === 0 && body.constructor === Object) {
    res.status(200).send('Request body is an empty object.');
    return;
  }

  // Check for empty array []
  if (Array.isArray(body) && body.length === 0) {
    res.status(200).send('Request body is an empty array.');
    return;
  }

  // If body has content (e.g., non-empty string, number, boolean, non-empty object/array)
  res.status(200).send(body);
};  