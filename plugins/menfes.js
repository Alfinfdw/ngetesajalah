import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix: _p }) => {
let [number, name, pesan, boddy] = text.split `|`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

    if (!number) return conn.reply(m.chat, 'Cara penggunaan!\n\n .menfes 6285xx|SecretName|message\n\n📣note : nomor target tidak boleh memiliki tanda (+ dan -)\n\nContoh: 6285976160666', m)
    if (!name) return conn.reply(m.chat, 'Isi namanya kocak', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    let from = `${name}`
    var nomor = m.sender
    let spam1 = `📩 ʜɪ ᴋᴀᴋ! ᴋᴀᴍᴜ ᴀᴅᴀ ᴩᴇꜱᴀɴ ʀᴀʜᴀꜱɪᴀ ᴅᴀʀɪ ꜱᴇꜱᴇᴏʀᴀɴɢ ɴɪʜ\n\n𝘿𝙖𝙧𝙞 : ${name}\n𝙋𝙚𝙨𝙖𝙣 : ${pesan}`

    const templateButtons = [
    {index: 1, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 2, quickReplyButton: {displayText: 'Dari Siapa?', id: '.gpls'}},
]
let tm = {
text: spam1,
footer: botdate,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(korban + '@s.whatsapp.net', tm, m)
}                      

{

    let logs = ` ⚠️Berhasil mengirim pesan rahasia ke ${korban}`
    conn.reply(m.chat, logs, m)
}}
handler.help = ['menfes']
handler.tags = ['anonymous']
handler.command = /^(menfes|menfess)$/i
handler.owner = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler
