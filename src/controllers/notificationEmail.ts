import { Post } from "../services/api";
import dotenv from "dotenv";

dotenv.config();

const notificationEmail = async (request_signature_key: string, name: string) => {
  const body = {
    request_signature_key: request_signature_key,
    message: `Prezado ${name},\nPor favor assine o documento.\n\nQualquer dúvida estou à disposição.\n\nAtenciosamente,\nGuilherme Alvez`,
    url: `https://sandbox.clicksign.com/sign/${request_signature_key}`,
  };
  try {
    const data = await Post(`/api/v1/notifications?access_token=${process.env.ACCESS_TOKEN}`, body);

    return data;
  } catch (e) {
    console.log(e.response.data.errors);
    return e;
  }
};

export default notificationEmail;
