import { Message } from "discord.js";
import Binary from "../Client";

interface Run {
  (binary: Binary, message: Message, args: string[]): void;
}
export interface Command {
  name: string;
  description: string;
  aliases?: string[];
  run: Run;
}
