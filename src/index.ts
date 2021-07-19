import Binary from "./Client";
import { PartialTypes } from "discord.js";
require("dotenv").config();

async function main() {
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
}

main();
