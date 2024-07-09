pi//#ENJOY
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
global.devs = "254113566713";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUhPVFdsdVdGZU9tR3dscEJUbEdMUStoajFkcjdtUVRDcEo2QlhzN1lGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUtVSnRMVlZpQVVIRkd5S1h1cjRMOTVzYzM0R0ZsLzBTbW5DSHZybmFIQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRCtnWGRTMWFvTnRyaUhQUmZKYU5Qa3dIUzZMN1ZIWDRDVHRoVUMySlZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHaVFGeEN1aS96VStkKzRNUjZIb3pvbTFDVmoyWUMrcFJYRW9NcmFUQmxVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndCTzc2VVI5TzhiY096M0hMK0VscGgzNEdERGdQU0lGRTV3RWF0My9qbms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjloZThEaVh3c0ZPY29rTWFYRWRZMGRtTDl2UC9mdWJMcHg0VU5PZVEybm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUpBUHE2aWR5MXBaa25kejhYTTh5QU51cTlNc1p6YUZRSGVSZC8vMGMzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTd5V3MyWjdKZ21wYnZGLy9KYzRQN2ZobjJOb1FmMkJmdGY0UWdTcFYxVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpNcG1LSEV0akRYd1ZtLy9DS0F5UzRiazlJa0NrL3puWkpWdXhNTUhkWDV6Y1Nid2c5REtMTUN3Z2tLMFhqTm1kYzVGL2UxM3FvZVhpekN3WU1VV0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEwLCJhZHZTZWNyZXRLZXkiOiJRYURnZjZsQnNQOWFkT1YvYy8zdUU4V1Q1MkpPWW9BNXlWcmtOQnBDNHJRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCakJKYVZqMFFpdWh2X0dNN3J2VjhBIiwicGhvbmVJZCI6Ijg4YWQyNTc4LWUzNzMtNGQ2Yy04NmVmLTI3NzQxM2E4NjI3OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3N3NCcWJyOEVIQitPdE0rOHQ0bDNQclJZOEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnBjL0pGcGxaTDdxWUdmODkwZ1FFc0VBQnlvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZYREZYVkxaIiwibWUiOnsiaWQiOiIyNTQ3MDcwMzAwMTg6MTdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0w2L2s0UUJFT3ZudExRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9MOW10MFI1WHZaQTRKZzVTcnBQVXdkS05nOTNNbVl6anJWeDYzNFo5eWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik45QVErVjhRbVZNdExJa0xxaVNqUWJDWndvaWVOanJLNVpwY0RyMGQ3RU9aZTlIYkpmTXB2U0c4eW1UZnRmUHFWcGRVZHNENjk3MnR2UWlLaDcvN0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJoYlhPdzRSdWxERURsT1BVbTFYS3kzV2cwQWVhM3VHMkVlQ1pIaVNLZ0NqLzZ5RXY4cFZ5dWJLSXp1U1ZOc01Ua3ZDcEJsT0hkYVVac2tvYk4xcTVCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcwNzAzMDAxODoxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmeS9acmRFZVY3MlFPQ1lPVXE2VDFNSFNqWVBkekptTTQ2MWNldCtHZmNuIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNTI5OTEzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUIyMSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
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
