import { Post } from "../services/api";

export const linkUser = async (keyDocument: string, keyUser: string, name: string) => {
  const list = {
    document_key: keyDocument,
    signer_key: keyUser,
    sign_as: "sign",
    group: 0,
    message: `Prezado ${name}`,
  };

  try {
    const data = await Post(`/api/v1/lists?access_token=${process.env.ACCESS_TOKEN}`, {
      list,
    });

    return data;
  } catch (e) {
    console.log(e.response.data.errors, "linkuser");
    return e;
  }
};

export default linkUser;