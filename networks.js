var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('f9beb4d9'),
  addressVersion: 0x00,
  privKeyVersion: 128,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('6FE28C0AB6F1B372C1A6A246AE63F74F931E8365E15A089C68D6190000000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 2083236893,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1231006505,
    bits: 486604799,
  },
  dnsSeeds: [
    'seed.bitcoin.sipa.be',
    'dnsseed.bluematt.me',
    'dnsseed.bitcoin.dashjr.org',
    'seed.bitcoinstats.com',
    'seed.bitnodes.io',
    'bitseed.xf2.org'
  ],
  defaultClientPort: 8333
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};

exports.hcdlivenet = {
  name: 'hcdlivenet',
  magic: hex('1bf52511'),
  addressVersion: 0x097f,
  privKeyVersion: 0x19ab,
  P2SHVersion: 0x095a,
  hkeyPublicVersion: 0x02fda926,
  hkeyPrivateVersion: 0x02fda4e8,
  genesisBlock: {
    hash: hex('7acdb01db365f91004dbb295bd4385522a94149f810ac7a9567152c05e4a0957'), //
    merkle_root: hex('23e912309b05c6caa3524628fc203ed7dc5c19d3326329e0e5b0f3e3300b7bf1'),
    height: 0,
    nonce: 0,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1533635700,
    bits: "1b01ffff",
  },
  dnsSeeds: [
    "mainnet1.h.cash",
    "mainnet2.h.cash",
    "mainnet3.h.cash",
    "mainnet4.h.cash",
    "mainnet5.h.cash"
  ],
  defaultClientPort: 14008
};

exports.hcdtestnet = {
  name: 'hcdtestnet',
  magic: hex('3a69b59a'),
  addressVersion: 0x0f21,
  privKeyVersion: 0x230e,
  P2SHVersion: 0x0efc,
  hkeyPublicVersion: 0x043587d1,
  hkeyPrivateVersion: 0x04358397,
  genesisBlock: {
    hash: hex('31d7c374487086ca86dd599203b9fbbbc4676f9c719b9962c65dd10ba4effe86'),
    merkle_root: hex('a216ea043f0d481a072424af646787794c32bcefd3ed181a090319bbf8a37105'),
    height: 0,
    nonce: 414098458,
    version: 4,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1522944000,
    bits: "1e00ffff",
  },
  dnsSeeds: [
    "testnet1.h.cash",
    "testnet2.h.cash",
    "testnet3.h.cash",
  ],
  defaultClientPort: 12008
};
