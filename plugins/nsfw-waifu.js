let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Panas panas Sange euy', m)
}
handler.help = ['waifus']
handler.tags = ['internet']
handler.command = /^(waifus)$/i
handler.limit = true

module.exports = handler
