console.log("Start Service ... !");
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getQnaResponse, searchVectorDatabase } from "./Search";
import { Config } from "./Config";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ succcess: true, data: "Discord GPT: v3.0" });
});

app.post("/api/v1/", async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const resp = await getQnaResponse(req.body);
    return res.json({ succcess: true, data: resp });
  } catch (err) {
    console.log(err);
    return res.json({ succcess: false, data: err });
  }
});

// Only Vector Search
app.post("/api/v1/search", async (req: Request, res: Response) => {
  console.log("Request search ------------- ");
  console.log(req.body);
  console.log(" --------------------------- ");

  try {
    const resp = await searchVectorDatabase(req.body);
    return res.json({ succcess: true, data: resp });
  } catch (err) {
    console.log(err);
    return res.json({ succcess: false, data: err });
  }
});

app.listen(Config.PORT, () => {
  console.log(`Server is running at http://localhost:${Config.PORT}`);
});
