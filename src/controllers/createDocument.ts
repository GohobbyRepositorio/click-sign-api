import express from "express";
import { Post } from "../services/api";

export const createDocument = async (req: express.Request) => {
  const {
    body: { document },
  } = req;

  console.log({ document });

  try {
    const data = await Post(
      `/api/v1/templates/${process.env.MODEL_DOCUMENT}/documents?access_token=${process.env.ACCESS_TOKEN}`,
      { document }
    );

    console.log(data);

    return data;
  } catch (e) {
    return e;
  }
};

export default createDocument;
