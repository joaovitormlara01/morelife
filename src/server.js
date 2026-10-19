import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const porta = 3000;
const pasta = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(pasta, "..", "public")));

app.listen(porta, () => {
    console.log(`MoreLife rodando em http://localhost:${porta}`);
});