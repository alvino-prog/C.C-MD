let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/hug')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'hug', m){
  asGIF: true}
}
handler.help = ['hug']
handler.tags = ['fun']
handler.command = /^(hug)$/i

module.exports = handler
