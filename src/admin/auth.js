export function adminAuth(req, res, next) {
  // Админ-доступ пока закрыт.
  // Откроем его после настройки проверки Telegram WebApp initData.

  return res.status(403).json({
    success: false,
    error: "Admin authentication is not configured",
  });
}