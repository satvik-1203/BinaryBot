import axios from "axios";
import { Command } from "@/root/src/Interfaces";
import { MessageEmbed } from "discord.js";

interface Data {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

export const command: Command = {
  name: "joke",
  description: "Sends a joke",
  run: async (binary, message, args) => {
    console.log("cool");
    const { data } = await axios.get<Data>(
      "https://official-joke-api.appspot.com/random_joke"
    );

    const embed = new MessageEmbed()
      .setTitle(`${data.type} Joke!`)
      .setColor("#00fcf5").setDescription(`
				Question: ${data.setup}
				Answer: ${data.punchline}.
			`);
    message.channel.send(embed);
  },
};
