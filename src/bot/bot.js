import { Telegraf } from "telegraf";
import { env } from "../config/env.js";
import { registerCommands } from "./commands.js";

export const bot = new Telegraf(env.BOT_TOKEN);

registerCommands(bot);

bot.catch((error) => {
  console.error("NEON VPN bot error:", error);
});