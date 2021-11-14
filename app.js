const { Bot } = require("grammy");

const bot = new Bot("");

bot.command("start", (ctx) => ctx.reply(ctx));

bot.start();

console.log("Bot Started")
