const { Telegraf } = require("telegraf");
const TOKEN = "7161253302:AAHdXbMAtG0NOEVNbHROwaiXhh_oSj2jeck";
const bot = new Telegraf(TOKEN);

const web_link = "https://leafy-gecko-3a332d.netlify.app/";
const banner_image_url = "https://tradeyourpi.com/wp-content/uploads/2024/03/Untitled-design-2.png";

bot.start((ctx) => {
  const description = "🚀 Welcome to X Change! 🚀\n\nReady to dive into the world of Pi Coins? Look no further! X Change offers a seamless platform for buying Pi Coins securely on Telegram. With lightning-fast transactions and top-notch security, your trading experience has never been smoother. Don't miss out—start your Pi Coin journey today!";
  const message = `${description}\n\nClick the button below to access our web app:`;

  ctx.replyWithPhoto({ url: banner_image_url }, {
    caption: message,
    reply_markup: {
      inline_keyboard: [[{ text: "Buy Pi Now 🥧", web_app: { url: web_link } }]],
    },
  });
});

bot.launch();
