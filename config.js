const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "ALONE/R.k";
global.github=process.env.GITHUB|| "https://whatsapp.com/channel/0029Vaivhx6CMY0FlBe1f11l";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vaivhx6CMY0FlBe1f11l";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vaivhx6CMY0FlBe1f11l" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mr.Umar" 


global.devs = "923103691167" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923103691167";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923103691167";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_30_01_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzOCxcbiAgICAgICAgNSxcbiAgICAgICAgMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDYwLFxuICAgICAgICA5NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICA0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNixcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4LFxuICAgICAgICAyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUzLFxuICAgICAgICA1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDczLFxuICAgICAgICA0NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NSxcbiAgICAgICAgOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDY5LFxuICAgICAgICA4MixcbiAgICAgICAgMjU1LFxuICAgICAgICA0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzksXG4gICAgICAgIDY1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtYzQwMjlwTDJQY25zVERNelY5ckp1cWlGcXNPTGtiZEMvdngrR01vRmJzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzEzMjU0MDQwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjNBQjI2QkFGMTM1RTBFMTkzMEE4MzQ1MkQwQzcyNzJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM3MTkyNjE4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTMyNTQwNDA0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNjhDQ0VDRDdGRjNFQzhCNTQ5NzMxRTU2RUE1NTJDM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzcxOTI2MThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMzVNS1ljWXNSUXlLcXVpbDNTY0hSQVwiLFxuICBcInBob25lSWRcIjogXCJlMmE1MjM3Ni03NDk0LTQ0YzctYmYwOC0yMDc2YjZhNGEyZThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUzLFxuICAgICAgMTQ2LFxuICAgICAgMTQ0LFxuICAgICAgMTE2LFxuICAgICAgMjExLFxuICAgICAgMjMxLFxuICAgICAgNjYsXG4gICAgICA2NyxcbiAgICAgIDg0LFxuICAgICAgMTMzLFxuICAgICAgMTYxLFxuICAgICAgNDMsXG4gICAgICA0NSxcbiAgICAgIDI0LFxuICAgICAgMTQzLFxuICAgICAgMTUwLFxuICAgICAgMTczLFxuICAgICAgMTAzLFxuICAgICAgOSxcbiAgICAgIDkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNSxcbiAgICAgIDI0NSxcbiAgICAgIDc5LFxuICAgICAgMTU0LFxuICAgICAgNDcsXG4gICAgICAxOTIsXG4gICAgICA2LFxuICAgICAgMTU0LFxuICAgICAgNjksXG4gICAgICAxNDYsXG4gICAgICAzMyxcbiAgICAgIDIxNCxcbiAgICAgIDI0MyxcbiAgICAgIDE1NSxcbiAgICAgIDIzNixcbiAgICAgIDE2MixcbiAgICAgIDE0MCxcbiAgICAgIDc2LFxuICAgICAgNyxcbiAgICAgIDE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdMMU5NNkhQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxMzI1NDA0MDQ6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTY3MjQyMDM1NDg2ODU6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJNUi5VTUFSXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTSt5MmE4RkVLUHByYndHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3djgxSXF2ZzFzMHlRSTFvM1NnVi8yNnRuNjhScjRsWlJlK2Z5V3ZUMWtNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9Nb29TSE1XOVRpdHZsVkY4dGdpTk1zSzhQcVBhZVlQS3huU3owODVOMytNc1dhMklkWlNCc2NCNW91b2paaVVTVVl3bXJ6N2NScXJJeFA2Y3NFT0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtSWDhqcjRBQ3o0MUNYU2FyUldPRDFhTnRJdUU5cFcwS1NGRFRqUURsRTdsc3BJN1ArRUJXVHl0ais5eHJtVkNycHN2WVFCeUFkb01SK0JmelZoQ0F3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEzMjU0MDQwNDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzcxOTI2MTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIUktcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhSSy5qc29uIjogIntcImtleURhdGFcIjpcImhNWFAvUm5tWjFxc2l0eTBodHlPbFZBS3lOUlIyVDJFYi9JK3VsR1BLTEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ0MjIwODA3OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM3MTkyNDU2NjY3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ALONE R.K 😎",
  ownername:process.env.OWNER_NAME|| "MR.UMAR",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Umar"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
