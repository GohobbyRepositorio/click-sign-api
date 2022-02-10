import axios from "axios";

import dotenv from "dotenv";

dotenv.config();

export const api = axios.create({
  baseURL: process.env.BASE_URL,
});

export const Post = async (url: string, body: any) => {
  const { data } = await api.post(url, JSON.stringify(body), {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data;
};
