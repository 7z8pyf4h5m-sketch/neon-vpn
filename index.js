import "dotenv/config";
import { Telegraf } from "telegraf";
import { createServer } from "node:http";

const TOKEN = process.env.BOT_TOKEN;

if (!TOKEN) {
  console.error("BOT_TOKEN is missing!");
  process.exit(1);
}

const bot = new Telegraf(TOKEN);

bot.start(async (ctx) => {
  await ctx.reply(
    "⚡ Добро пожаловать в NEON VPN!\n\n" +
    "Быстрый и удобный VPN-сервис.\n\n" +
    "Выбери действие:\n" +
    "/plans — тарифы\n" +
    "/help — помощь"
  );
});

bot.command("help", (ctx) => {
  ctx.reply("⚡ NEON VPN\n\nПо вопросам подключения обратись в поддержку.");
});

bot.command("plans", (ctx) => {
  ctx.reply(
    "💎 Тарифы NEON VPN\n\n" +
    "Тарифы скоро появятся.\n" +
    "Мы готовим запуск сервиса."
  );
});

bot.on("text", (ctx) => {
  if (ctx.message.text.startsWith("/")) return;
  ctx.reply("⚡ NEON VPN получил твоё сообщение!");
});

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("NEON VPN is running");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`NEON VPN server running on port ${PORT}`);
});

bot.launch()
  .then(() => console.log("NEON VPN bot started"))
  .catch((error) => console.error("Bot error:", error));

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));