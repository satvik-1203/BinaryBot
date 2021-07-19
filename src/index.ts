import Binary from "./Client";
import { PartialTypes } from "discord.js";
require("dotenv").config();

async function main() {
  try {
    const partials: PartialTypes[] = [
      "CHANNEL",
      "MESSAGE",
      "REACTION",
      "USER",
      "GUILD_MEMBER",
    ];

    const binary = new Binary(partials);
    binary.setConfig(
      process.env.token,
      process.env.mongooseURI,
      process.env.prefix
    );
    await binary.init();
  } catch {
    console.log("Something went wrong with the env variables");
  }
}

main();
