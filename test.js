const md5 = require("md5");
function main(string) {
    if (!string) throw new ReferenceError('nickname not provided');
    let uuid = md5(`OfflinePlayer:${string}`);

    uuid[6] = uuid[6].charCodeAt(0) & 0x0f | 0x30;
    uuid[8] = uuid[8].charCodeAt(0) & 0x3f | 0x80;

    return [`${uuid.slice(0, 8)}-${uuid.slice(8, 12)}-${uuid.slice(12, 16)}-${uuid.slice(16, 20)}-${uuid.slice(20, 32)}`];
};

let myUUID = main('cipherka'); // f9a3cdb5-5479-8d72-5892-f5602162c339
let minecraftUUID = "f9a3cdb5-5479-3d72-9892-f5602162c339";
let check = myUUID === minecraftUUID;

console.log(`myUUID = ${myUUID}`);
console.log(`minecraftUUID = ${minecraftUUID}`);
console.log(`Check: ${check}`);
