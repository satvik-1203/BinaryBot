import { Message } from "discord.js";
import Binary from "../Client";

export default (binary: Binary, message: Message): boolean => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.startsWith(binary.config.prefix)
  )
    return true;
  return false;
};
