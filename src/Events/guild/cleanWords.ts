import { Event } from "@/root/src/Interfaces";
import { Message } from "discord.js";
import Filter from "bad-words";

export const event: Event = {
  name: "message",
  run: (_, message: Message) => {
    if (!message.guild) return;
    const filter = new Filter();
    const hasBadWord = filter.isProfane(message.content);
    if (!hasBadWord) return;
    message.delete({ timeout: 10000 });
    message.reply("I caught u swearing 😢");
  },
};
