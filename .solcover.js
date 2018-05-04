module.exports = {
    norpc: false,
    copyNodeModules: false,
    compileCommand: '../node_modules/.bin/truffle compile',
    testCommand: '../node_modules/.bin/truffle test --network coverage',
    skipFiles: [
        'contracts/Migrations.sol'
    ]
};
