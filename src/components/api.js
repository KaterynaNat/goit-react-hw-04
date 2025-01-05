import axios from 'axios';

const API_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = '1mNBb4sZb6LkzJ8M-hSCST70yxqoupvSW65jiAqn5hE';

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(API_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });
  return data;
};
