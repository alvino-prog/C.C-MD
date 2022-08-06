let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan query!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v4/characters', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, nicknames, url, image_url, about, type } = results.json[0]
let charaingfo = `💬 *Name:* ${name}
💭 *Nickname:* ${nicknames}
🔗 *Link*: ${url}
👤 *About*: ${about}`

  conn.sendFile(m.chat, image_url, '', charaingfo, m)
}
handler.help = ['character <nama>']
handler.tags = ['internet']
handler.command = /^(chara|character)$/i
//kyaa jangan biarkan wabot-aq terbengkalai sampai nurutomo kembali
// Command - Re Edited -- TOXIC-DEVIL == || Character Type ||
module.exports = handler
