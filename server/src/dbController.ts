import fs, { fdatasync } from "fs";
import { resolve } from "path";

export enum DBField {
  DOCUMENTS = "documents",
  USERS = "users",
  SCHEDULES = "schedules",
  STREAM = "stream",
}

const basePath = resolve(); // 현재의 경로가 변수에 할당된다. == __dirname

const filedNames = {
  [DBField.DOCUMENTS]: resolve(basePath, "./src/db/documents.json"),
  [DBField.USERS]: resolve(basePath, "./src/db/users.json"),
  [DBField.STREAM]: resolve(basePath, "./src/db/stream.json"),
  [DBField.SCHEDULES]: resolve(basePath, "./src/db/schedules.json"),
};

export const readDB = (target: DBField) => {
  try {
    return JSON.parse(
      fs.readFileSync(filedNames[target], { encoding: "utf-8" })
    );
  } catch (err) {
    console.log("read", err);
  }
};

export const writeDB = (target: DBField, data: any) => {
  try {
    fs.writeFileSync(filedNames[target], JSON.stringify(data, null, "  "));
  } catch (err) {
    console.log("write", err);
  }
};
export const writeStream = (target: DBField) => {
  try {
    fs.createWriteStream("./tts1.mp3");
  } catch (err) {
    console.warn(err);
  }
};
