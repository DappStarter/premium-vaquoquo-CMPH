require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note sunset comfort install knee front team'; 
let testAccounts = [
"0xc8e2a9dc5519442eca3b0f1ce0729fbaf10100de7d29dde8fc1d6042000532ab",
"0xa1c01607e400f80dd0b3cab7bd5d9431aab6e99902b4f00bc5d692bc8c8e366e",
"0xe1f123e0021e93d690e0319a4c05dc9c467e6059b738c01d19c2dc937f013135",
"0xd9fd8170153190726fc1d45d6ce946f580dd86741e137d2657aa73eadd1fcf56",
"0x8ab3ddaa7f7e4c86ef6c8e3f03bcd8cff514ae4211819fa9dff5724be4828bc0",
"0xa8c84a1c082b9c974fee94af66238a58d21d1390d6ad86a57ce24164aa375216",
"0x535f3f82e54fa7d40e8e82030f53af41cacdeb61c1e1d835e681c54cd9f6c894",
"0xb5d60eff2bf43575ef922c04e21210c74ecaf76b2488933904113a716da269c5",
"0xe7df1848cedd8ec11da8f63ad5b0eba9caccacb2adc389ea36c26a91c63da88f",
"0x505629aca5f517cc4f05087305b7937567b2ee1866d900fb4439602d130868f5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


