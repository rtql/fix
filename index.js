module.exports = async (req, res) => {
  const { body, key } = req;
  
  if (!key) {
    return res.status(400).send({ error: 'API key is required' });
  }

  try {
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    
    const data = await response.json();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to process request' });
  }
};  