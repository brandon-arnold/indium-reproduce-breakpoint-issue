import express from "express";
import foo from "./foo/foo";

const app = express();
app.listen(3000, () => {
  console.log(`Running in port 3000`);
});
app.get("/foo", foo);
