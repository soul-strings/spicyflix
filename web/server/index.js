const express = require("express");
const cors = require("cors");
const axios = require("axios");

const port = 5000;
const hostname = "127.0.0.1";

const server = express();

const options = {
  origin: "*",
};

server.use(cors(options));
server.use("/api/video", async (req, res) => {
  try {
    const response = await axios.get(
      "https://spicyflix-api.vercel.app/api/tiktok",
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

server.listen(port, hostname, () => {
  console.log(`server running @ http:${hostname}:${port}`);
});
