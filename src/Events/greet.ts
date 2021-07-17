import { Event } from "../Interfaces";
import { GuildMember, MessageEmbed } from "discord.js";

export const event: Event = {
  name: "guildMemberAdd",

  run: (binary, member: GuildMember) => {
    const channel = member.guild.channels.cache.find(
      ch => ch.name === "welcome"
    );
    member.roles.add("865199583570034718");

    if (!channel) return;

    const embed = new MessageEmbed()
      .setColor("#0099ff")
      .setDescription(
        `**Cyclone** is glad to see you here ;)\n\nGo into rules to read the channel rules and roles to  get your role \n\nHave a great stay **${member.displayName}**`
      );

    if (channel.isText()) channel.send(embed);
  },
};
