import express from "express";
import helmet from "helmet";
import { env } from "./src/config/env.js";
import { bot } from "./src/bot/bot.js";
import adminRoutes from "./src/admin/routes.js";

const app = express();

app.use(helmet());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    success: true,
    service: "NEON VPN",
    status: "running",
  });
});

app.use("/api/admin", adminRoutes);

app.use(express.static("public"));

app.get("/admin", (req, res) => {
  res.sendFile("admin.html", { root: "public" });
});

const server = app.listen(env.PORT, () => {
  console.log(`NEON VPN server running on port ${env.PORT}`);
});

bot.launch()
  .then(() => console.log("NEON VPN bot started"))
  .catch((error) => console.error("Bot error:", error));

async function shutdown() {
  console.log("Shutting down NEON VPN...");

  bot.stop("SHUTDOWN");

  server.close(() => {
    process.exit(0);
  });
}

process.once("SIGINT", shutdown);
process.once("SIGTERM", shutdown);