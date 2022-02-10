import { Router, express } from "express";
import createDocument from "../controllers/createDocument";
import createUser from "../controllers/createUser";
import linkUser from "../controllers/linkUser";
import notificationEmail from "../controllers/notificationEmail";

const router = Router();

router.get("/", (req, res) => {
  res.json({ ok: "Se liga maluco" });
});

router.post("/click-sign", async (req: express.Request, res: express.Response) => {
  try {
    const { document } = await createDocument(req);
    console.log(document, "createDocument");
    const { signer } = await createUser(req);

    console.log(signer, "createUser");

    const keyDocument = document?.key;
    const { key: keyUser, name } = signer;

    const { list } = await linkUser(keyDocument, keyUser, name);

    console.log(list, "LinkUser");

    const { request_signature_key } = list;

    notificationEmail(request_signature_key, name);

    return res.json({ document, signer, list });
  } catch (e) {
    res.send({ message: e.message });
  }
});

export { router };
