let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Uhm.. teksnya mana?\n\nContoh:\n${usedPrefix + command} naruto`
  let res = await fetch(API('https://api.jikan.moe', '/v4/anime', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  console.log(json)
  let { title, members, synopsis, episodes, url, rating, score, image_url, status, type, duration, mal_id } = json.data[0]
  //Scrape Genre MAL by DwiR
 /*let res2 = await fetch(`https://myanimelist.net/anime/${mal_id}`)
  if (!res2.ok) throw await res2.text()
  let html = await res2.text()
  let { document } = new JSDOM(html).window
  let genAnim = [...document.querySelectorAll('div[class="spaceit_pad"] > * a')].map(el => el.href).filter(href => href.startsWith('/anime/genre/'))*/
  let animeingfo = `✨️ *Title:* ${title}
🎆️ *Episodes:* ${episodes}

💫 *Status:* ${status}
⏳ *Duration:* ${duration}

💬 *Show Type:* ${type}
💌️ *Rating:* ${rating}
❤️ *Score:* ${score}
👥 *Members:* ${members}
💚️ *Synopsis:* ${synopsis}
🌐️ *URL*: ${url}`
  conn.sendFile(m.chat, image_url, '', animeingfo, m)
}
handler.help = ['anime <judul>']
handler.tags = ['internet']
handler.command = /^(anime|animeinfo)$/i

module.exports = handler
