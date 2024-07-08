//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/nhelvo/Venocyber-md";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/G4OqIod7kOi4v3bKIIo41j";
global.website = process.env.GURL || "https://chat.whatsapp.com/G4OqIod7kOi4v3bKIIo41j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/82aa9c6e73f051f82596d.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "254113566713";
global.owner = process.env.OWNER_NUMBER || "254113566713";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/82aa9c6e73f051f82596d.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "false";
global.read_status_from = process.env.READ_STATUS_FROM || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0NWZDVkZmJlMnNoSlo3cXlxUFBzdmhldHBXZERlcHZTeGVFOGFlTDczMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlBVQStnenFaT2tZTkhZWWRGc0RaM2loVnlkbUx6NldtYlZReS9qZER6dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwT1ZnTDBTenFRNVY1VzFWeFJGMHhBdHNnU2VJUWZRRTB1WjI3c0VPRlVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTVGVqMldhLytGdXdWU1N0cFdrUXBwQU1nL1I4Sjc0aFp0QlQrYUY2NWhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlBRnV3clYxZlZHWDBFbTlXM0RpQjdYRTkwTlh5UmVpa2Z1T2hqVFd3Vlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhNb2NuWHowTnhCNWcvUU1wNnhQVnVSMTcyWWkzRWJ5WkV4NXQxakhJRlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ09ZSHNhYWg2NGJSd3BwVHNkenNlZnlGQi9MYVdTTUJpdWJJL1RVYXAwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMU5rZGRGMEJieGp6dmdxcEY2b1NEenFyR3NWbmFiaHZ3d3YzaGE5M0dIMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxSTWR5VGZMTmw2dGVYVDZIcjI5WW9veThLRjVSeXZ4T1AwdWJwSGpjUlFOWExvL1k0R2dpS0xUVG1oKzB0M29XeGNtdXBKNEkvYWg1WkUvZEh2NWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY4LCJhZHZTZWNyZXRLZXkiOiJUZDZyd1NhTU5BZ3VZcXpqTjA4MGN5K2s1LzBqaUIyU1o1aHlEYjNRbHZrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhVENIaTMyaFNkbWlSdENJdDIySVdnIiwicGhvbmVJZCI6IjJhZWMzMWZkLTM5NDEtNDllMy1hMGY2LWZiOTA3YzkwNjYzOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQzZKN3htTkMzWFJSZ3IyV3FOalBBYkE2QzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDNlTEQ0L3loeTFPeWpCR3d3dzErUGdVM1d3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkYyVjJYRFpZIiwibWUiOnsiaWQiOiIyNTQxMTM1NjY3MTM6NzhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2VufCdlo3wnZaK8J2WkfCdlpvwnZaU4bWI8J2VqfCdlbDwnZaR8J2WmvCdlpLwnZaOIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMenVxNjhCRUliQnNiUUdHQlFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTdDNVdmQxUC9ReDRYVE0vRlVNZWdlaHQxVSszblN5OXpKZkpGUGZIc1RBPSIsImFjY291bnRTaWduYXR1cmUiOiJpeFBxQUNtVmU1elRLVXBVYXZ0Wng1elNiWXE1WUorWkFMOHVvc3ExVzd6TkZKVm5pem55TVFsQTk2eHhWamxuOU1sRU0xVWFyejhNWjhTV0RzOXFDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiM0dFU1VlMDRMTHFiKzF6WHprTUhnSU40RmcrUVZUM3RwTnhXbno1T0VYNTNNYnRueU0zc1hhdE9vWnNFbitaY3NOVEdHN3JZUVhxK0xLRUZUa0QwaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQxMTM1NjY3MTM6NzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXJkMUwzZFQvME1lRjB6UHhWREhvSG9iZFZQdDUwc3ZjeVh5UlQzeDdFdyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDQ3NTc5NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIV3oifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "#",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "𝕹𝖍𝖊𝖑𝖛𝖔ᵈ𝕩",
  packname: process.env.PACK_NAME || "nhel",
  botname: process.env.BOT_NAME || "𝕮𝖆𝖑𝖑 𝕸𝖊 𝕹𝖍𝖊𝖑𝖑",
  ownername: process.env.OWNER_NAME || "𝕶𝖆𝖎𝖘𝖊 𝖔𝖋 𝕰𝖑𝖚𝖒𝖎",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "𝕹𝖍𝖊𝖑𝖛𝖔ᵈ𝕩").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
