exports.wait = () => {
        return `⌛ Procesando ⌛`
}

exports.timeEnd = () => {
        return `Tiempo acabado`
}

exports.succsess = () => {
        return `✔️ Hecho ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *enable leveling*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *disable leveling*`
}

exports.levelnol = () => {
        return `*Tu nivel* 0 °-°`
}

exports.stick = () => {
        return `[❗] Error ❌`
}

exports.Iv = () => {
        return `❌ Link inválido ❌`
}

exports.group = () => {
        return `[❗] Comando sólo para grupos! ❌`
}

exports.ownerG = () => {
        return `[❗] Comando sólo para owner! ❌`
}

exports.ownerB = () => {
        return `[❗] Comando sólo para owner! ❌`
}

exports.admin = () => {
        return `[❗] Comando sólo para admins! ❌`
}

exports.Badmin = () => {
        return `[❗] El bot necesita admin! ❌`
}

exports.daftarB = (prefix) => {
        return `──「 NOT YET REGISTERED 」──\nHello Sis !\nDebes registrarte primero \n\nCommand : ${prefix}register nama|umur\nExample : ${prefix}register Lena|17`
}

exports.daftarD = () => {
        return `*「 YA REGISTRADO 」*\n\n*ya estás registrado*`
}

exports.wrongf = () => {
        return`*Formato incorrecto / texto vacío*`
}

exports.clears = () => {
        return`*Éxito al borrar todo*`
}

exports.pc = () => {
        return`*「 Registro 」*\n\nsi no has recibido el mensaje no estás registrado*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 REGISTER DATA 」*\n\nregistrado con los datos: \n\n◪ *DATA* \n  │ \n  ├─ ❏ Name : ${namaUser} \n  ├─ ❏ Number : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Age : ${umurUser} \n  ├─ ❏ Register Time : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ AVISO : ESTE NÚMERO PUEDE SER IMPORTANTE :v`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* no encontrado \ intenta escribir *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*perdona pero ${pushname} no es el propietario del script*`
}

exports.limitend = (pushname) => {
        return`*sorry ${pushname} Tus límites de hoy *\n*se resetean siempre a las 00:00 horas*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 XP Contador 」*
tus límites son : ${limitCounts}

NOTE : Compra el límite`
}

exports.satukos = () => {
        return`*Add parameters 1 (enable) or 0 (disable)`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *BALANCE*\n  ❏ *Name* : ${pushname}\n  ❏ *Number* : ${sender.split("@")[0]}\n  ❏ *Money* : ${uangkau}`
}
