const qrku = "https://i.ibb.co/y04Nwzk/donasi.png"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • Dana 」
│ • Telkomsel [081276242128]
│ • Dana  [081276242128]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6281276242128
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
