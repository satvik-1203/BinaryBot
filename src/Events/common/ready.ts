import { Message, PresenceData } from "discord.js";
import { Event } from "../../Interfaces";

export const event: Event = {
  name: "ready",
  run: async (binary, message: Message) => {
    console.log("Listening...");
    binary.user?.setPresence({
      activity: {
        name: "Prefix: ^binary",
        type: "WATCHING",
        url: "https://github.com/satvik-1203/BinaryBot",
      },
    });
  },
};
