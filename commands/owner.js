const settings = require('../settings');

async function ownerCommand(sock, chatId) {
    const vcard = `
BEGIN:VCARD
VERSION:1.0.4
FN:${settings.botOwner}
TEL;waid=${settings.233508591189}:${settings.233508591189}
END:VCARD
`;

    await sock.sendMessage(chatId, {
        contacts: { displayName: settings.botOwner, contacts: [{ vcard }] },
    });
}

module.exports = ownerCommand;
