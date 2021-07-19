import { Command } from "../../Interfaces";

export const command: Command = {
  name: "ping",
  description: "Shows the ping of Binary's web socket",
  aliases: ["p"],
  run: (binary, message, cmd, args) => {
    message.channel.send(`${binary.ws.ping} ping!`);
  },
};
