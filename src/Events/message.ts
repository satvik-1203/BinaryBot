import { Message } from "discord.js";
import { Event } from "../Interfaces";
import eventError from "../misc/eventError";

export const event: Event = {
  name: "message",
  run: (binary, message: Message) => {
    const args = message.content
      .slice(binary.config.prefix.length)
      .trim()
      .split("/ +/g");
    if (eventError(binary, message)) return;
    console.log(message.content);

    const cmd = args.shift()?.toLowerCase();
    if (!cmd) return;
    const command = binary.commands.get(cmd) || binary.aliases.get(cmd);
    if (!command) return;
    command.run(binary, message, args);
  },
};
