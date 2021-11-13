const { Bot } = require("grammy");

const bot = new Bot("643431269:AAHjExuktEe5vn9ubLH8W1ta1LgiL_EASnw");

bot.command("start", (ctx) => ctx.reply(ctx));

bot.start();

console.log("Bot Started")