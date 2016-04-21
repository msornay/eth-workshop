var ethlove = eth.contract([{ "constant": false, "inputs": [ { "name": "a", "type": "address" }, { "name": "b", "type": "address" } ], "name": "areLinked", "outputs": [ { "name": "", "type": "bool" } ], "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "links", "outputs": [ { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000", "displayName": "" } ], "type": "function" }, { "constant": false, "inputs": [ { "name": "with", "type": "address" } ], "name": "link", "outputs": [], "type": "function" }, { "inputs": [], "type": "constructor" }]).at("0xD3348528633F63272965AA582D29ae31ee3A6c61")


function areLinked(a, b) {
    return ((ethlove.links(a) == b) && (ethlove.links(b) == a));
}

// Convert an address string to a byte array
function addressToBytes(hex) {
    hex = hex.substr(2)
    for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}

// Convert a byte array to an address string
function bytesToAddress(bytes) {
    for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
    }
    return "0x" + hex.join("");
}

function xorAddresses(a, b) {
    aArr = addressToBytes(a);
    bArr = addressToBytes(b);
    xorArr = []
    for (var i = 0; i < aArr.length; i++) {
        xorArr[i] = aArr[i] ^ bArr[i];
    }
    return bytesToAddress(xorArr)
}
