const fs = require('fs')
const chalk = require('chalk')

// Website Api Nya Bng
global.APIs = {
	zenz: 'https://api.lolhuman.xyz',
}

// Udah Free Apikey Jadi Klo Mau Ubah Silahkan
global.APIKeys = {
	'https://api.lolhuman.xyz': 'azzbot',
}

// Other
global.namabot = ['ZINS BOTZ MD']
global.namaowner = ['ZINS STORE REAL']
global.owner = ['6282118415702']
global.premium = ['6282118415702']
global.packname = 'ZINS BOTZ MD'
global.author = 'WhatsApp•Bot'
global.sessionName = 'Xavior'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Sukses✅',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Jadikan Bot Admin Terlebih Dahulu!',
    owner: 'Khusus Owner Bot',
    group: 'Fitur Khusus Grup',
    private: 'Fitur Khusus Chat Pribadi',
    bot: 'Khusus Nomor Bot',
    wait: 'Tunggu Sebentar',
    endLimit: 'Limit Harian Sudah Habis, Limit Akan Direset Besok',
}
//Kalo Ngasih Limit Jangan Dikit Lah Bng
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/xavi.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
