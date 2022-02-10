import express from "express";
import { Post } from "../services/api";

const createUser = async (req: express.Request) => {
  const {
    body: { signer },
  } = req;

  try {
    const data = await Post(`/api/v1/signers?access_token=${process.env.ACCESS_TOKEN}`, {
      signer,
    });

    return data;
  } catch (e) {
    console.log(e.response.data.errors);
    return e;
  }
};

export default createUser;
