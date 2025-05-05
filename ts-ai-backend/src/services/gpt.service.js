const axios = require('axios');

exports.generateDescription = async (features) => {
  const prompt = \`Generate a real estate listing from: \${features}\`;
  const res = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }]
  }, {
    headers: { Authorization: \`Bearer \${process.env.OPENAI_API_KEY}\` }
  });
  return res.data.choices[0].message.content;
};
