import { Client, Collection } from "discord.js";
import path from "path";
import { readdirSync } from "fs";
import { Config, Command, Event } from "../Interfaces";
import configJson from "config";

class Binary extends Client {
  public commands: Collection<string, Command> = new Collection();
  public events: Collection<string, Event> = new Collection();
  public aliases: Collection<string, Command> = new Collection();
  public config: Config = {
    token: configJson.get("token"),
    mongooseURI: configJson.get("mongooseURI"),
    prefix: configJson.get("prefix"),
  };
  public async init() {
    this.login(configJson.get("token"));

    const commandPath = path.join(__dirname, "..", "/Commands");
    readdirSync(commandPath).forEach(dir => {
      const files = readdirSync(`${commandPath}/${dir}`).filter(file =>
        file.endsWith(".ts")
      );
      files.forEach(file => {
        const { command } = require(`${commandPath}/${dir}/${file}`);
        this.commands.set(command.name, command);
        if (command.aliases?.length) {
          command.aliases.forEach((alias: any) =>
            this.aliases.set(alias, command)
          );
        }
      });
    });

    const eventPath = path.join(__dirname, "..", "/Events");
    readdirSync(eventPath).forEach(async file => {
      const { event } = await import(`${eventPath}/${file}`);
      this.events.set(event.name, event);
      this.on(event.name, event.run.bind(null, this));
    });
  }
}

export default Binary;
