const BASE_URL = 'https://api-candidate.ogruposix.com';
const USER_TOKEN = '571DEFDE-1A7C-4713-8D08-9EADD19CA91B';

const headers = {
  'Content-Type': 'application/json',
  'user-token': USER_TOKEN
};

const api = {
  get: async (endpoint) => {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, { method: 'GET', headers });
      return response.json();
    } catch (error) {
      console.error('Erro na requisição GET:', error);
      throw error;
    }
  },

  post: async (endpoint, data) => {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
      });

      return response;
    } catch (error) {
      console.error('Erro na requisição POST:', error);
      throw error;
    }
  }
};
#

export default api;
