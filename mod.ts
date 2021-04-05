import { Bot } from './deps.ts'

import { getShibes } from "./shib_api.ts";

const token = Deno.env.get("BOT_TOKEN") || '';

console.log(token)

const bot = new Bot(token)

bot.on("text", async(ctx) => {
  const text = await ctx.message?.text;

  if (text === "/shibe"){
    await ctx.reply(await getShibes());
  }
})

bot.launch();