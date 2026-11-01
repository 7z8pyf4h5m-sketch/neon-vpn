import { mainKeyboard, backKeyboard } from "./keyboards.js";

export function registerCommands(bot) {
  bot.start(async (ctx) => {
    await ctx.reply(
      "⚡ Добро пожаловать в NEON VPN!\n\n" +
      "Быстрый и удобный VPN-сервис.\n\n" +
      "Выбери нужный раздел:",
      mainKeyboard()
    );
  });

  bot.command("help", async (ctx) => {
    await ctx.reply(
      "📖 Помощь NEON VPN\n\n" +
      "По вопросам подключения обратись в поддержку.",
      backKeyboard()
    );
  });

  bot.action("plans", async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply(
      "💎 Тарифы NEON VPN\n\n" +
      "Тарифы скоро появятся. Следи за обновлениями.",
      backKeyboard()
    );
  });

  bot.action("profile", async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply(
      "👤 Твой профиль\n\n" +
      `Telegram ID: ${ctx.from.id}\n` +
      `Имя: ${ctx.from.first_name || "Не указано"}`,
      backKeyboard()
    );
  });

  bot.action("help", async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply(
      "📖 Помощь\n\nЕсли нужна помощь с подключением, напиши в поддержку.",
      backKeyboard()
    );
  });

  bot.action("support", async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply(
      "💬 Поддержка NEON VPN\n\nКонтакт поддержки будет добавлен перед запуском.",
      backKeyboard()
    );
  });

  bot.action("back", async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.reply("⚡ Главное меню NEON VPN", mainKeyboard());
  });
}