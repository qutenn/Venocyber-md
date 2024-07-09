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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUFaaFROU2FyQUVaVXFhZU81bjIwMmYxSmtHNVI3MTN0RVc2ZnRYUzYyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXJTK2xHaWJIT0haWUxjeHQ5SHBkdk1PY3FRanhJQWN2NFFnVDRRVWhpdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RGJNZmNGVHVnUnJ6Y2MwTElEU09hUTUvRUw0TjNsa1dKVFhXc2d0aW04PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1MnVzR1V2bnA2SW1aSXc2NjZPWWx5RjgwZEZlRnFIalZUalNDMVVWQlZJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklJNmprWnUzS09wQzB6U3JzbSs3ZFNYRi8zZVc1ZjgrMXNrWGVpeUVZMlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlljYzNvTzlQZGJWc2w0VkJmOUpYSVlRQXpPMVlEcUNyMnJRZkt2Rmt0a3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0d3M053TUVQb1ovRjIwYWRwOUFGMEtiWEZ4RXNnMGxjaWZNcUJ3anVITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXBaUmxYM0lkRDlqUFl6Rjd3VU56Q0NMVmxYK0hXY3VuSExLd0xxRytVND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhEdUZzZ0g3bnRhaFA1Q2laWW91WG5IcUU0MmdyRnAxc3RrSnc4dEFSdjF6Q2IraEZ6NW91cDdvSEZxdU1mbTErTnlZK1ZBYTZzWTFBcE1XMnY4UmhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIzLCJhZHZTZWNyZXRLZXkiOiJsQ1N6MjFkdjA0UURSS2lEa3ZpZHMrb1VYa1UwN21xUXBLUy80bVQvYS9jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpS3ZJckpRRFNYYURVLW95SUxWTDZnIiwicGhvbmVJZCI6ImU0YjI4MDNkLTM0NGMtNDhiMC1hNjQwLTM1ZDk2YWI4N2Y2MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuZE5EaGNmSXROVDM3U0J6cTBwQmpQOWJSRGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3RJd3dxMGJLMWNsa0JFd2tLend6dEc2N3o0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFEUE5UU0M1IiwibWUiOnsiaWQiOiIyNTQxMTM1NjY3MTM6NzlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2VufCdlo3wnZaK8J2WkfCdlpvwnZaU4bWI8J2VqfCdlbDwnZaR8J2WmvCdlpLwnZaOIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMenVxNjhCRVBUaXRMUUdHQlVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTdDNVdmQxUC9ReDRYVE0vRlVNZWdlaHQxVSszblN5OXpKZkpGUGZIc1RBPSIsImFjY291bnRTaWduYXR1cmUiOiJwb2ZpZ0xsKzZ6N2xkNnU0c2FVUVc5VVNCdGpUVmJua0VML3IyLzVHb0d3Rm9FcHJPZHFDWTBlVk9OSU4zaFZJMXhHN29oa3dzazB1VW5NUnVaaHJEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiV1JlQ2NNKzNvUjg1QUcyYzVuYlRiN3UvQms1M2ZnUENjNG9uTXpXS052VG5VM28waGptaWdTaVVRamNyTUs0RGZrb1k0N0VuajJLWWZ5dllVR3NXZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQxMTM1NjY3MTM6NzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXJkMUwzZFQvME1lRjB6UHhWREhvSG9iZFZQdDUwc3ZjeVh5UlQzeDdFdyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDUyOTI4MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIV3oifQ=="
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
