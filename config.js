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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkRsQWF5VktZVWl3Tk05WTZmK0diczVUUmdLdWJSTnZVRFBKV1BlQnExTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTluS1ZNbWpnYlV6MzRkVGdaZDUxdWFJcFhHdXdZejJrcXkzaW1pdWFrVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TnRYeUZqRW81RUpWMEFBVVJyajRmK1lOWFdSRmZRNmtDNkFGTUdscDNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzMlJqSnNBc0Zzb0lucjNyak8vYmhpRURFbkw1cld3eWU2MHRSQVNqVWlBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtDQ0cyZTR4NVZuejdHSy90VXJUS0N5L0lQODgwZ0RPK2FUSzVxN0J0R0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNrMWo1TWxKZGpUN2ZxSUxXNUZyeUJlWnZPNFhyNUVHRmQ1RzhFK2lQbDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUEyZWNlQjJnV1J6NXRFRnY5MGlBejlCcm4wMDFhWEJmdGQ0bFcxUG5XTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGFvb0V3NGhGcGo2M2tjOFRhYlJyTjY2a3ZoVlhjZDFVOXJveDlYaXptWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktaUDNRMTJZY3pOVitCemlmUW5mWVFWYm55cmpGWTVNNmZhamNhd2VCb1l4Lyt6VHJTSWcrN3A0eitqZ0RvanV5VU9qVmFGME8wTkMzWXNENUdSckJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6InlMKzVHN1V5bjZ2R1dDMHlVK3lrdkNvQW5rd0RNNUJDWVhKT0RGK2VUWW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImkybUxXOVM4VDgyRnZERXhRR3pMclEiLCJwaG9uZUlkIjoiMTUzNWVhNWMtYjdmMi00Mzk1LTkyNzQtZWIwMDdhMDEwMWVmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpwOEhWeUIzSktXbHBUZ0lMVmVFOE1jT2lLZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2T3JyWStqc3dTaW1NM3FUS0wydHAyRmJtVWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS0taWVJUNzQiLCJtZSI6eyJpZCI6IjI1NDExMzU2NjcxMzo4NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZW58J2WjfCdlorwnZaR8J2Wm/CdlpThtYjwnZWp8J2VsPCdlpHwnZaa8J2WkvCdlo4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x6dXE2OEJFTUtiK0xRR0dCd2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlN0M1V2ZDFQL1F4NFhUTS9GVU1lZ2VodDFVKzNuU3k5ekpmSkZQZkhzVEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlExQW9KajJYKy80L0dJTmgwZVRmMTZwSWIxVzVzSzA4OEN4WHpGRC9jNTFZZnp0YWxZWXZlaXNwSndMOW9HL2YzbVp4b01WdlRSZEhDd2JLcEd0MEF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUYjlreWxjSUpkRVNaZTNVSXJucTVqelNMeHpGZzBTZDV4MzYrM0VZa3BOQTFuQkxCbkVOZjRlYlJpekdkK01pd1EwelJ5eUxjZ0pzS1E1R3pIWTlCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDExMzU2NjcxMzo4NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVcmQxTDNkVC8wTWVGMHpQeFZESG9Ib2JkVlB0NTBzdmN5WHlSVDN4N0V3In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxNjM0MjU2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhXeiJ9"
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
