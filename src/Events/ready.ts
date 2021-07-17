import { Message } from "discord.js";
import { Event } from "../Interfaces";
import eventError from "../misc/eventError";

export const event: Event = {
  name: "ready",
  run: async (binary, message: Message) => {
    console.log("ready");
  },
};
