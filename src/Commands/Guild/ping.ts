import { Command } from "../../Interfaces";

export const command: Command = {
  name: "ping",
  description: "Shows the ping of the user",
  aliases: ["p"],
  run: (binary, message, args) => {
    message.channel.send(`${binary.ws.ping} ping!`);
  },
};
