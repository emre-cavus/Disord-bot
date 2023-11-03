import { Client, Collection, Collection } from "discord.js"
import "dotenv/config"
const client = new Client({
  intents: ["GUILDS"],
  presence: { status: "dnd", activities: [{ name: "Slash Commands", type: "playing" }] }
})
client.on("ready", () => {
  console.log("Mr.J Bot hazır")


})
const collection = new Collection()
collection.set("a", 1)
collection.set("b", 2)

console.log(collection.size)
client.login(process.env.token)
//node ./app.js


// Status
// Activity
// Presence
