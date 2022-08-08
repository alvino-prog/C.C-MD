let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan query!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v4/characters', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  console.log(json)
  let { name, nicknames, name_kanji, url, images, about, type } = json.data[0]
let charaingfo = `💬 *Name:* ${name} ${name_kanji}
💭 *Nickname:* ${nicknames}
🔗 *Link*: ${url}
👤 *About*: ${about}`

  conn.sendFile(m.chat, images, '', charaingfo, m)
}
handler.help = ['character <nama>']
handler.tags = ['internet']
handler.command = /^(chara|character)$/i
//kyaa jangan biarkan wabot-aq terbengkalai sampai nurutomo kembali
// Command - Re Edited -- TOXIC-DEVIL == || Character Type ||

module.exports = handler
