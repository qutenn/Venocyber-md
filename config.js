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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0syWWdVZ1kzMEZoVWZCMVQwZTFheXlITCsvTTh1SFVtRHp1aThNUjJGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWVSbWVLZVpubU9jN2I1RWNjUlBtNDcxZ0FONHMveU9qZkdldnIvNkptOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSEl4RXBhYnFsN0NhU1FSZUJmaW8wSGxOSFdFMTBNdHBWaVRaWkxGZDIwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4ajZNWjI5MnBGVGpsOEJldmU0ZVdVNzlaVkx3eGg4ZXRkdlFvQ3JDMDJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNL01nRW9MLytJL1hGK2ZCTFNVWlJzUUdoWldqVVRPblRGZFgzaTRoVlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdPMFZudkovTFlqZlB1aUtWMWVtNGR6ZC9MbHN5d1ZzRkxJM0ZTRk9lUVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0FpSFY4SWFSaEtFdncxa0JDTHVVWVZVdEF5Vjd0SUlUUjJiaEErSFFWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVQ5RnJYY2dDRUh4TnFqZ09tanF3a2hCTUx4clk5WDU0dU4rM1NoaHVWdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik11L2FHRXFQVVd3ZTZzZUVDNVpuVEhLRWVTd0IvcEN4V1VSNFRpeDVnZ0VHVGtaTksyU3BJcTIvZUQ2N0hkQUFuN2Q3aUNTdGoyQWVrMFQ3RytIaWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM2LCJhZHZTZWNyZXRLZXkiOiJRemg2SVE0ZElPYXBpS1dCbmNCcitaZ0JHRTA5WG1KOEpieCtjMVhGSHdzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJEdVFnYmdJMFF4aTVsd3c4N3JaVnRBIiwicGhvbmVJZCI6IjI3ZGNmOTlmLTRhZTctNGM0ZC1hZjczLWJhMTZiMzYwNTM4YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxUkEyT3hmeVg2a1ZBQ1pKSldDUEk4QWVmR289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGtxd3ZXNUIrWnE4MU5xazVmQzVtYTQ2T1Q4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhDSEpHUFhQIiwibWUiOnsiaWQiOiIyNTQxMTU5MDc2NTQ6NTBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BIWG9ZUUZFSzdNdGJRR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikg4SzMwMUhsTFdoLy9oNlhPVFBTYkZzbTdVVmFIbFpWbEpIWGQxaVdzUVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZBYU9Jb2w2c0dkN2dETU1nMWdQNTF3QXkxOFMwMzV0TEt4WVNTYTNHVERWZHpCUS9ETGpvalBmMmtwdXZicVFCaFN1VFoybEhGenh2VXdWdGJvS0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMdjRKZ1BHclFwajFKVTVSN2RLd3c3STdjdkJtSFgrOFdQaE83dk9ZUTdTOXc3eTk2TzM0RHp0R05HTUk2aXRGc0ZVakFWUkFUV05OUURrWFVvckhpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDExNTkwNzY1NDo1MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSL0N0OU5SNVMxb2YvNGVsemt6MG14Ykp1MUZXaDVXVlpTUjEzZFlsckVFIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNTQyNzgwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZSMCJ9"
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
