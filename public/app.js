const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();

  const user = tg.initDataUnsafe?.user;
  const welcome = document.querySelector("#user-name");

  if (user && welcome) {
    welcome.textContent = user.first_name || "Пользователь";
  }
}

console.log("NEON VPN Mini App loaded");