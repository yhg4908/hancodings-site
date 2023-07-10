const dotenv = require("dotenv");
dotenv.config();

const { Client, Collection } = require("discord.js");
const client = (module.exports = new Client({ intents: [131071] }));
client.login(process.env.TOKEN);

client.once("ready", () => {
  console.log(`${client.user.tag} 로그인`);
});

client.on("messageCreate", (message) => {
  if (message.content == "안녕") {
    message.reply({ content: `**반갑습니다!**` });
  }
});
