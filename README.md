
# Node.js Discord Bot for School Calendar Integration



## Overview
This Node.js bot, developed collaboratively by [@MrLuto](https://github.com/MrLuto) and [@DaandeHaan](https://github.com/DaandeHaan), is designed to seamlessly integrate our school calendar into a Discord server. The bot utilizes the Osiris Ripoff API, created by another student at our school, to fetch the school calendar data.
## Features 

- Calendar Integration: Connects to the Osiris Ripoff API to retrieve the school calendar.
- Authentication: Sends an authentication token to the API for secure access.
- Filtering: Filters the calendar to display only the lessons scheduled for the next day.
- Discord Integration: Utilizes the Discord.js Node.js module to add filtered lessons as events to our class Discord server.

## Installation

To use the bot, follow these steps:

Clone the repository: ```git clone [repository_url]```

Install dependencies: ```npm install```

Configure the .env file by adding: 
- your Genuine Osiris authentication token
- server id 
- channel id

Run the bot: ```node index.js```
    
## Usage

Run the bot once a day via a cron rule or via a task in pterodactyl.


## Dependencies

 - [Node.js](https://nodejs.org/)
 - [Discord.js](https://discord.js.org/)
 - [dot-env](https://www.npmjs.com/package/dotenv)
 - [Osiris Ripoff (API)](https://osiris.rainger.nl/)
 - [Osiris](https://roca12.osiris-student.nl/)


## Authors

- [@MrLuto](https://github.com/MrLuto)
- [@DaandeHaan](https://github.com/DaandeHaan)

