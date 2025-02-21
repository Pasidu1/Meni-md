const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const mumaker = require('mumaker')
cmd({
    pattern: "naruto",
    alias: ["textpro"],
    react: '💫',
    desc: "Text to Image Collection",
    category: "logo",
    use: '.naruto',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
if (!q) return await  reply('🚩 *Text not found ! Please type a text to Make Art*')
const res = 'https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html'
let json = await mumaker.textpro(res, q)
let wtf = { url: json.image }
const wm  = '*ᴘɪɴᴋ ᴠᴇɴᴏᴍ-ᴍᴅ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀʏᴏᴅʜʏᴀ ᴠɪᴄʜᴀᴋsʜᴀɴᴀ*'
await conn.sendMessage(from, { image: { url: wtf }, caption: wm}, { quoted: mek })
} catch (e) {
reply("🚩 *Not Found !*")
console.log(e)
}
})
//┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉
cmd({
    pattern: "rose",
    alias: ["textpro2"],
    react: '💫',
    desc: "Text to Image Collection",
    category: "logo",
    use: '.rose',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
if (!q) return await  reply('🚩 *Text not found ! Please type a text to Make Art*')
const res = 'https://textpro.me/create-online-elegant-3d-ruby-text-effect-1137.html'
let json = await mumaker.textpro(res, q)
let wtf = { url: json.image }
const wm  = '*ᴘɪɴᴋ ᴠᴇɴᴏᴍ-ᴍᴅ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀʏᴏᴅʜʏᴀ ᴠɪᴄʜᴀᴋsʜᴀɴᴀ*'
await conn.sendMessage(from, { image: { url: wtf }, caption: wm}, { quoted: mek })
} catch (e) {
reply("🚩 *Not Found !*")
console.log(e)
}
})
//┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉
cmd({
    pattern: "cake",
    alias: ["textpro3"],
    react: '💫',
    desc: "Text to Image Collection",
    category: "logo",
    use: '.cake',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
if (!q) return await  reply('🚩 *Text not found ! Please type a text to Make Art*')
const res = 'https://textpro.me/create-3d-chocolate-cake-text-effect-online-1135.html'
let json = await mumaker.textpro(res, q)
let wtf = { url: json.image }
const wm  = '*ᴘɪɴᴋ ᴠᴇɴᴏᴍ-ᴍᴅ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀʏᴏᴅʜʏᴀ ᴠɪᴄʜᴀᴋsʜᴀɴᴀ*'
await conn.sendMessage(from, { image: { url: wtf }, caption: wm}, { quoted: mek })
} catch (e) {
reply("🚩 *Not Found !*")
console.log(e)
}
})
//┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉
cmd({
    pattern: "pokemon",
    alias: ["textpro4"],
    react: '💫',
    desc: "Text to Image Collection",
    category: "logo",
    use: '.pokemon',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
if (!q) return await  reply('🚩 *Text not found ! Please type a text to Make Art*')
const res = 'https://textpro.me/create-pokemon-logo-style-text-effect-online-1134.html'
let json = await mumaker.textpro(res, q)
let wtf = { url: json.image }
const wm  = '*ᴘɪɴᴋ ᴠᴇɴᴏᴍ-ᴍᴅ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀʏᴏᴅʜʏᴀ ᴠɪᴄʜᴀᴋsʜᴀɴᴀ*'
await conn.sendMessage(from, { image: { url: wtf }, caption: wm}, { quoted: mek })
} catch (e) {
reply("🚩 *Not Found !*")
console.log(e)
}
})
//┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉
cmd({
    pattern: "liquid",
    alias: ["textpro5"],
    react: '💫',
    desc: "Text to Image Collection",
    category: "logo",
    use: '.liquid',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
if (!q) return await  reply('🚩 *Text not found ! Please type a text to Make Art*')
const res = 'https://textpro.me/create-3d-liquid-metal-text-effect-1112.html'
let json = await mumaker.textpro(res, q)
let wtf = { url: json.image }
const wm  = '*ᴘɪɴᴋ ᴠᴇɴᴏᴍ-ᴍᴅ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀʏᴏᴅʜʏᴀ ᴠɪᴄʜᴀᴋsʜᴀɴᴀ*'
await conn.sendMessage(from, { image: { url: wtf }, caption: wm}, { quoted: mek })
} catch (e) {
reply("🚩 *Not Found !*")
console.log(e)
}
})
//┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉
cmd({
    pattern: "rusty",
    alias: ["textpro6"],
    react: '💫',
    desc: "Text to Image Collection",
    category: "logo",
    use: '.rusty',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
if (!q) return await  reply('🚩 *Text not found ! Please type a text to Make Art*')
const res = 'https://textpro.me/online-3d-rusty-metal-text-effect-maker-1133.html'
let json = await mumaker.textpro(res, q)
let wtf = { url: json.image }
const wm  = '*ᴘɪɴᴋ ᴠᴇɴᴏᴍ-ᴍᴅ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀʏᴏᴅʜʏᴀ ᴠɪᴄʜᴀᴋsʜᴀɴᴀ*'
await conn.sendMessage(from, { image: { url: wtf }, caption: wm}, { quoted: mek })
} catch (e) {
reply("🚩 *Not Found !*")
console.log(e)
}
})
//┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉
cmd({
    pattern: "neon",
    alias: ["textpro7"],
    react: '💫',
    desc: "Text to Image Collection",
    category: "logo",
    use: '.cake',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
if (!q) return await  reply('🚩 *Text not found ! Please type a text to Make Art*')
const res = 'https://textpr/neon-light-style-3d-text-effect-online-1132.html'
let json = await mumaker.textpro(res, q)
let wtf = { url: json.image }
const wm  = '*ᴘɪɴᴋ ᴠᴇɴᴏᴍ-ᴍᴅ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀʏᴏᴅʜʏᴀ ᴠɪᴄʜᴀᴋsʜᴀɴᴀ*'
await conn.sendMessage(from, { image: { url: wtf }, caption: wm}, { quoted: mek })
} catch (e) {
reply("🚩 *Not Found !*")
console.log(e)
}
})
//┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉
cmd({
    pattern: "pcartoon",
    alias: ["textpro8"],
    react: '💫',
    desc: "Text to Image Collection",
    category: "logo",
    use: '.pcartoon',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
if (!q) return await  reply('🚩 *Text not found ! Please type a text to Make Art*')
const res = 'https://textpro.me/create-pink-cute-3d-cartoon-text-effect-online-1131.html'
let json = await mumaker.textpro(res, q)
let wtf = { url: json.image }
const wm  = '*ᴘɪɴᴋ ᴠᴇɴᴏᴍ-ᴍᴅ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀʏᴏᴅʜʏᴀ ᴠɪᴄʜᴀᴋsʜᴀɴᴀ*'
await conn.sendMessage(from, { image: { url: wtf }, caption: wm}, { quoted: mek })
} catch (e) {
reply("🚩 *Not Found !*")
console.log(e)
}
})
//┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉
cmd({
    pattern: "dragon",
    alias: ["textpro9"],
    react: '💫',
    desc: "Text to Image Collection",
    category: "logo",
    use: '.dragon',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
if (!q) return await  reply('🚩 *Text not found ! Please type a text to Make Art*')
const res = 'https://textpro.me/create-3d-dragon-scale-text-effect-online-1127.html'
let json = await mumaker.textpro(res, q)
let wtf = { url: json.image }
const wm  = '*ᴘɪɴᴋ ᴠᴇɴᴏᴍ-ᴍᴅ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀʏᴏᴅʜʏᴀ ᴠɪᴄʜᴀᴋsʜᴀɴᴀ*'
await conn.sendMessage(from, { image: { url: wtf }, caption: wm}, { quoted: mek })
} catch (e) {
reply("🚩 *Not Found !*")
console.log(e)
}
})
//┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉
cmd({
    pattern: "sunset",
    alias: ["textpro10"],
    react: '💫',
    desc: "Text to Image Collection",
    category: "logo",
    use: '.sunset',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
if (!q) return await  reply('🚩 *Text not found ! Please type a text to Make Art*')
const res = 'https://textpro.me/create-sunset-light-text-effects-online-for-free-1124.html'
let json = await mumaker.textpro(res, q)
let wtf = { url: json.image }
const wm  = '*ᴘɪɴᴋ ᴠᴇɴᴏᴍ-ᴍᴅ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀʏᴏᴅʜʏᴀ ᴠɪᴄʜᴀᴋsʜᴀɴᴀ*'
await conn.sendMessage(from, { image: { url: wtf }, caption: wm}, { quoted: mek })
} catch (e) {
reply("🚩 *Not Found !*")
console.log(e)
}
})
//┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉
cmd({
    pattern: "3dcartoon",
    alias: ["textpro11"],
    react: '💫',
    desc: "Text to Image Collection",
    category: "logo",
    use: '.3dcartoon',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
if (!q) return await  reply('🚩 *Text not found ! Please type a text to Make Art*')
const res = 'https://textpro.me/create-3d-cartoon-text-effect-online-1120.html'
let json = await mumaker.textpro(res, q)
let wtf = { url: json.image }
const wm  = '*ᴘɪɴᴋ ᴠᴇɴᴏᴍ-ᴍᴅ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀʏᴏᴅʜʏᴀ ᴠɪᴄʜᴀᴋsʜᴀɴᴀ*'
await conn.sendMessage(from, { image: { url: wtf }, caption: wm}, { quoted: mek })
} catch (e) {
reply("🚩 *Not Found !*")
console.log(e)
}
})
//┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉
cmd({
    pattern: "grunge",
    alias: ["textpro12"],
    react: '💫',
    desc: "Text to Image Collection",
    category: "logo",
    use: '.grunge',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
if (!q) return await  reply('🚩 *Text not found ! Please type a text to Make Art*')
const res = 'https://textpro.me/grunge-metallic-3d-text-effect-online-1115.html'
let json = await mumaker.textpro(res, q)
let wtf = { url: json.image }
const wm  = '*ᴘɪɴᴋ ᴠᴇɴᴏᴍ-ᴍᴅ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀʏᴏᴅʜʏᴀ ᴠɪᴄʜᴀᴋsʜᴀɴᴀ*'
await conn.sendMessage(from, { image: { url: wtf }, caption: wm}, { quoted: mek })
} catch (e) {
reply("🚩 *Not Found !*")
console.log(e)
}
})
//┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉
cmd({
    pattern: "multicolor",
    alias: ["textpro13"],
    react: '💫',
    desc: "Text to Image Collection",
    category: "logo",
    use: '.multicolour',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
if (!q) return await  reply('🚩 *Text not found ! Please type a text to Make Art*')
const res = 'https://textpro.me/create-3d-multicolor-paint-text-effect-online-1114.html'
let json = await mumaker.textpro(res, q)
let wtf = { url: json.image }
const wm  = '*ᴘɪɴᴋ ᴠᴇɴᴏᴍ-ᴍᴅ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀʏᴏᴅʜʏᴀ ᴠɪᴄʜᴀᴋsʜᴀɴᴀ*'
await conn.sendMessage(from, { image: { url: wtf }, caption: wm}, { quoted: mek })
} catch (e) {
reply("🚩 *Not Found !*")
console.log(e)
}
})
//┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉
cmd({
    pattern: "3dmetalic",
    alias: ["textpro14"],
    react: '💫',
    desc: "Text to Image Collection",
    category: "logo",
    use: '.3dnetalic',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
if (!q) return await  reply('🚩 *Text not found ! Please type a text to Make Art*')
const red = 'https://textpro.me/create-3d-metallic-text-with-details-online-1108.html'
let json = await mumaker.textpro(res, q)
let wtf = { url: json.image }
const wm  = '*ᴘɪɴᴋ ᴠᴇɴᴏᴍ-ᴍᴅ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀʏᴏᴅʜʏᴀ ᴠɪᴄʜᴀᴋsʜᴀɴᴀ*'
await conn.sendMessage(from, { image: { url: wtf }, caption: wm}, { quoted: mek })
} catch (e) {
reply("🚩 *Not Found !*")
console.log(e)
}
})
//┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉
cmd({
    pattern: "party",
    alias: ["textpro15"],
    react: '💫',
    desc: "Text to Image Collection",
    category: "logo",
    use: '.party',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try {
if (!q) return await  reply('🚩 *Text not found ! Please type a text to Make Art*')
let res = 'https://textpro.me/party-text-effect-with-the-night-event-theme-1105.html'
let json = await mumaker.textpro(res, q)
let wtf = { url: json.image }
const wm  = '*ᴘɪɴᴋ ᴠᴇɴᴏᴍ-ᴍᴅ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀʏᴏᴅʜʏᴀ ᴠɪᴄʜᴀᴋsʜᴀɴᴀ*'
await conn.sendMessage(from, { image: { url: wtf }, caption: wm}, { quoted: mek })
} catch (e) {
reply("🚩 *Not Found !*")
console.log(e)
}
})
//┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉┈┉
cmd({
    pattern: "logo",
    react: "🖌️",
    alias: ["textpro"],
    desc: "Bot's logo creating menu",
    category: "logomenu",
    use: '.logo',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
let cap = '*ᴘɪɴᴋ-ᴠᴇɴᴏᴍ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴄʀᴇᴀᴛᴇᴅ ʙʏ • ᴀʏᴏᴅʜʏᴀ ᴠɪᴄʜᴀᴋsʜᴀɴᴀ*'
let s_text = `
乂 ＬＯＧＯ-ＭＥＮＵ 乂
┌ 1: .naruto <text>
│ 2: .rose <text>
│ 3: .cake  <text>
│ 4: .pokemon <text>
│ 5: .liquid <text>
│ 6: .rusty <text>
│ 7: .neon <text>
│ 8: .pcartoon <text>
│ 9: .dragon <text>
│ 10: .sunset <text>
│ 11: .3d artoon <text>
│ 12: .grunge <text>
│ 13: .multicolour <text>
│ 14: .3dmetalic <text>
└ 15: .party <text>

${cap}
`
await conn.sendMessage(from,
{text: s_text ,
contextInfo:{
	externalAdReply: { 
	title: '꒒ꉻꁅꂦ ꂵꏂꋊꐇ' ,
	body: 'ᴘɪɴᴋ ᴠᴇɴᴏᴍ-ᴍᴅ',
	mediaType: 1,
	sourceUrl: "https://chat.whatsapp.com/FXyuV3TnntNFk7qFEGQia9" ,
        thumbnailUrl: 'https://telegra.ph/file/637693c8af973197d95f6.jpg',
          showAdAttribution: true
	}  
}
    },

{quoted:mek })
} catch (e) {
   
  reply('*Error Detected !* ```ERROR CODE - 011```\n\n' + e)
}
})
