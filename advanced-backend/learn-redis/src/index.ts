import express, { response } from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT ?? 8000;

interface cacheStore {
  totalPageCount: Number;
}

const cacheStore = {
  totalPageCount: 0,
};

app.get("/", (req, res) => {
  return res.json({ status: "Success" });
});

app.get("/books", async (req, res) => {
  const response = await axios.get(
    "https://api.freeapi.app/api/v1/public/books"
  );
  return res.json(response.data);
});

app.get("/books/total", async (req, res) => {
  // Check in existing cache
  if (cacheStore.totalPageCount) {
    console.log("Cache Hit")
    return res.json({ totalPageCount: Number(cacheStore.totalPageCount) });
  }

  const response = await axios.get(
    "https://api.freeapi.app/api/v1/public/books"
  );

  const totalPageCount = response?.data?.data?.data?.reduce(
    (acc: number, curr: { volumeInfo: { pageCount?: number } }) =>
      !curr.volumeInfo?.pageCount ? 0 : curr.volumeInfo.pageCount + acc,
    0
  );

  // Set the cache
  cacheStore.totalPageCount = Number(totalPageCount);

  console.log("Cache Miss");
  return res.json({ totalPageCount });
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
