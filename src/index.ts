import Binary from "./Client";
require("dotenv").config();

async function main() {
  const binary = new Binary([
    "CHANNEL",
    "MESSAGE",
    "REACTION",
    "USER",
    "GUILD_MEMBER",
  ]);
  binary.setConfig(
    process.env.token,
    process.env.mongooseURI,
    process.env.prefix
  );
  await binary.init();
}

main();
