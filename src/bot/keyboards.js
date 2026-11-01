import { Markup } from "telegraf";

export function mainKeyboard() {
  return Markup.inlineKeyboard([
    [
      Markup.button.callback("💎 Тарифы", "plans"),
      Markup.button.callback("👤 Профиль", "profile"),
    ],
    [
      Markup.button.callback("📖 Помощь", "help"),
      Markup.button.callback("💬 Поддержка", "support"),
    ],
  ]);
}

export function backKeyboard() {
  return Markup.inlineKeyboard([
    [Markup.button.callback("⬅️ Назад", "back")],
  ]);
}