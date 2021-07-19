import { Client, Collection, PresenceData, PartialTypes } from "discord.js";
import path from "path";
import { readdirSync } from "fs";
import { Config, Command, Event } from "../Interfaces";

type env = string | undefined;

class Binary extends Client {
  constructor(private partials?: PartialTypes[]) {
    super({ partials: partials });
  }

  // Collection set

  public commands: Collection<string, Command> = new Collection();

  public events: Collection<string, Event> = new Collection();

  public aliases: Collection<string, Command> = new Collection();

  public commandLength = 0;

  public config: Config = {
    token: "",
    mongooseURI: "",
    prefix: "",
  };

  public setConfig(token: env, mongooseURI: env, prefix: env) {
    if (!token || !mongooseURI || !prefix)
      return console.log("No env variables");

    this.config.token = token;
    this.config.prefix = prefix;
    this.config.mongooseURI = mongooseURI;
  }
  public async init() {
    this.login(this.config.token);

    // Need to change command readDir and event readDir more flexible

    // For reading all the commands

    const commandPath = path.join(__dirname, "..", "/Commands");
    readdirSync(commandPath).forEach(dir => {
      const files = readdirSync(`${commandPath}/${dir}`).filter(file =>
        file.endsWith(".ts")
      );
      files.forEach(file => {
        const { command } = require(`${commandPath}/${dir}/${file}`);
        this.commands.set(command.name, command);
        this.commandLength++;
        if (command.aliases?.length) {
          command.aliases.forEach((alias: any) =>
            this.aliases.set(alias, command)
          );
        }
      });
    });

    // for reading all the events

    const eventPath = path.join(__dirname, "..", "/Events");
    readdirSync(eventPath).forEach(async dir => {
      readdirSync(`${eventPath}/${dir}`).forEach(async file => {
        const { event } = await import(`${eventPath}/${dir}/${file}`);
        this.events.set(event.name, event);
        this.on(event.name, event.run.bind(null, this));
      });
    });
  }
}

export default Binary;
