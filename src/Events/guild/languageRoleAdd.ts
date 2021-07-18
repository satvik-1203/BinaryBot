import { MessageReaction, User } from "discord.js";
import { Event } from "../../Interfaces";
import languageRoles from "../../misc/languageRoles";

export const event: Event = {
  name: "messageReactionAdd",
  run: async (binary, reaction: MessageReaction, user: User) => {
    if (reaction.message.id != "865887095816847412") return;
    if (reaction.partial) await reaction.fetch();
    if (reaction.message.partial) await reaction.message.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;

    const roleId = languageRoles.get(reaction.emoji.name);
    if (!roleId) return console.log("nope");
    await reaction.message.guild.members.cache.get(user.id)?.roles.add(roleId);
  },
};
