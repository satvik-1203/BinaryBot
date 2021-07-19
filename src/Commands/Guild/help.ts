import { Command } from "@/root/src/Interfaces";
import { MessageEmbed } from "discord.js";

// Might change the structure as we grow more commands into it

export const command: Command = {
  name: "help",
  description: "Sends a message of all the commands in the server",
  aliases: ["h"],
  run: (binary, message, cmd, args) => {
    let commandDescription = "**Prefix:** ^binary  \n\n";
    [...binary.commands.values()].forEach(botCommand => {
      commandDescription += `**${botCommand.name}:**  ${botCommand.description}.\n`;
    });
    const embed = new MessageEmbed()
      .setTitle("^binary Help")
      .setDescription(commandDescription)
      .setColor("#00fcf5");
    message.channel.send(embed);
  },
};
