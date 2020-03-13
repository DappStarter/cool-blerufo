require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food chat crawl six proud hundred light army ghost'; 
let testAccounts = [
"0xa4bc36a4967e9a7a98e4e9ecbe1997d28d99ec5a7885ddd8858984a7e8f8efd2",
"0x8b06913de8748021264434d448c4e418a914b4a2cb8b44fb7935e1d9a36973dd",
"0xeb8d83778edcd050fca92572da3bf79a10d371583ed4a7ddbbd62537ce32bf4c",
"0x2f1d94f11b7d4c54a3a9e8667020fd66663a79cf8fac810f169a98a3e1a455ce",
"0x76caab17d90f6e2e0ae5697a1f72dc5dadf55c53486f40cc4cfbc5b80a07abd5",
"0x6a95b3b0de2b889a964eba5cef78f4c9e0808b68b388a89c78d3bc3007b70fb3",
"0x9efb8de7cde13959f3a11d578e6d66455708c28f0299defd336f9a761094311b",
"0x05e1726e2af6415b70ce2015062acf12ed53718dec41f96dcae941ce17c36497",
"0x352fbbd23582e024d3f29f33f2f5bb6cf92d694b1376afd4f1fd4b3d0a335e7e",
"0x8203b4de1c77c5a300964e869bb4bdddf51fe77beb4e1dfa2df173d506b12f4d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
