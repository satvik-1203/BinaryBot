import Binary from "../Client/index";
import { ClientEvents } from "discord.js";

interface Run {
  (binary: Binary, ...args: any): void;
}

export interface Event {
  name: keyof ClientEvents;
  run: Run;
}
