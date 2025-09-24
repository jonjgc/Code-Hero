import axios from 'axios';
import md5 from 'crypto-js/md5';

const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
const API_BASE_URL = process.env.REACT_APP_MARVEL_API_BASE_URL;

if (!PUBLIC_KEY || !PRIVATE_KEY || !API_BASE_URL) {
  throw new Error(
    'Verifique suas credenciais da API da Marvel no arquivo .env',
  );
}

const ts = new Date().getTime();
const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

const api = axios.create({
  baseURL: API_BASE_URL,
  params: {
    ts,
    apikey: PUBLIC_KEY,
    hash,
  },
});

export default api;
