# Chat Shop (шаблон)
Чат-магазин: меню с кнопками, города, каталог, заказ, оплата, баланс, поддержка, тема, вход.

## Запуск на GitHub Pages
1. Создай репозиторий, залей `index.html` и `config.js`.
2. Settings → Pages → Branch `main` → Save. Сайт будет на `https://ИМЯ.github.io/РЕПО/`.
3. Правь товары и тексты в `config.js`.

## Вход через Telegram
1. В Telegram открой @BotFather → `/newbot`, получи токен.
2. `/setdomain` → выбери бота → укажи домен сайта (ИМЯ.github.io).
3. Залей `server.js` на Render/Railway: переменная `BOT_TOKEN`, команда `node server.js`.
4. В `config.js` впиши `BOT_USERNAME` и `API_URL` сервера.

Без `API_URL` работает демо: данные хранятся в браузере, а не на сервере.
Заказы, баланс и проверку оплат на сервере нужно дописывать отдельно.
