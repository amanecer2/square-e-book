const BASE_URL = 'https://www.googleapis.com/books';

export const APIS = {
  BOOKS: (q) => `${BASE_URL}/v1/volumes?q=${encodeURIComponent(q)}&maxResults=20`
};

