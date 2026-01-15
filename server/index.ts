import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");

const app = express();
const port = 5000;

// Serve static files from the root directory
app.use(express.static(rootDir));

// Serve index.html for all other routes to support client-side routing if any
app.get("*", (req, res) => {
  res.sendFile(path.join(rootDir, "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Static server running at http://0.0.0.0:${port}`);
});
