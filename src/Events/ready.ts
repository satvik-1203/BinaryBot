import { Message, PresenceData } from "discord.js";
import { Event } from "../Interfaces";

export const event: Event = {
  name: "ready",
  run: async (binary, message: Message) => {
    console.log("Listening...");
  },
};
