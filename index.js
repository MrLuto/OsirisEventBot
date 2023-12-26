// start Load Node Modules 
require('dotenv').config();
const { Client, GatewayIntentBits, GuildScheduledEventManager  } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const d = new Date();
// end Load Node Modules

// start create let variables
let json_data;
let TodayRooster;
let guild;
let event_manager;
let lesson_class;
// end create let variables

// start create functions
// ### create_discord_event ###
function create_discord_event(data, auth){
  console.log(data);
  TodayRooster = data["items"][2]["dagen"][d.getDay()]["rooster"]
  TodayRooster.forEach((lesson) => {
    console.log(lesson);
    if (lesson.tijd_vanaf.length == 4) {
      lesson.tijd_vanaf = "0" + lesson.tijd_vanaf;
    }
    console.log(auth);
    if (auth == "micha") {
      lesson_class = "klas 3"
    } else if (auth == "stein") {
      lesson_class = "klas 4"
    }
    let name = lesson.onderwerp;
    let description = lesson.docenten[0].naam + ", " + lesson_class;
    let startles = lesson.tijd_vanaf;
    let eindles = lesson.tijd_tm;
    let date = lesson.datum;
    let scheduledStartTime = date.replace("23:00", startles);
    let scheduledEndTime = date.replace("23:00", lesson.tijd_tm);
    event_manager.create({
      name: name,
      scheduledStartTime: scheduledStartTime,
      scheduledEndTime: scheduledEndTime,
      privacyLevel: 2,
      entityType: 3,
      entityMetadata: { location: lesson.locatie },
      channel: process.env.channel_id,
      description: description,
      image: null
    });
  })
}
// ### create_discord_event ###
// ### fetchrequest ###
function fetchrequest(auth){
  json_data = fetch("https://api.rainger.nl/osiris/", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ auth: auth })
  })
  .then((response) => response.json())
  .then((data) => {create_discord_event(data, auth)});
}
// ### fetchrequest ###

// end create functions

// start main code (will start on boot)
client.on('ready', async () => {
  guild = await client.guilds.fetch(process.env.guild_id);
  event_manager = new GuildScheduledEventManager(guild);

  fetchrequest(process.env.auth1);
  fetchrequest(process.env.auth2);
  
  console.log("done") 
});
// end main code (will start on boot)

//start connect to discord
client.login(process.env.token);
//end connect to discord