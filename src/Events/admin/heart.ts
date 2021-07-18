import { Event } from "@/root/src/Interfaces";
import { Message } from "discord.js";

export const event: Event = {
  name: "message",
  run: (_, message: Message) => {
    if (message.author.id !== "371184346822082561") return;
    message.react("💜");
  },
};
