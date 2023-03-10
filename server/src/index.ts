import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import usersRoute from "./routes/users";
import schedulesRoute from "./routes/schedules";
import resumesRoute from "./routes/resumes";
import uploadImagesRoute from "./routes/uploadImages";

import applicationsRoute from "./routes/applications";
import documentsRoute from "./routes/documents";

export const app = express();

app.use(express.json()); // application/json 파싱을 위해서
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser(process.env.COOKIE_SECRET)); // get요청이 오면 uri변수들이 파싱되어 req.cookies객체에 저장된다.
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = [
  ...usersRoute,
  ...resumesRoute,
  ...schedulesRoute,
  ...uploadImagesRoute,
  // ...documentsRoute,
  // ...applicationsRoute,
];

routes.forEach(({ method, route, upload, handler }) => {
  app[method as Method](route, upload, handler);
});

app.listen({ port: 8000 });
console.log("server is listening on port 8000...");

type Method =
  | "get"
  | "post"
  | "put"
  | "delete"
  | "head"
  | "options"
  | "patch"
  | "connect";

// app.get('/', (res:any,req)=>{
//   res.send('ok')
// })
// app.post('/documents', (req,res)=>{
//   ....
// })
