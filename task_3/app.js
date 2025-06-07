import express from "express";
import os from "os";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const hostname = os.hostname();
  res.send(`
        <h1>Server: ${hostname}</h1>
        <p>Bu server sizga javob bermoqda!</p>
        <p>Vaqt: ${new Date().toLocaleString()}</p>
    `);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server ${hostname} da ${port} portda ishlamoqda`);
});
