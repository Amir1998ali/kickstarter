const path = require('path');
// sol compiler
const solc = require('solc');
// fs modul pul in
// similar to fs but got extra functions
//file system module
const fs = require('fs-extra'); 

// delete build folder if exist - first wee get the path
// __dirname gives us the current parent directory and then the build directory
const buildPath = path.resolve(__dirname, 'build');
// removeSync is extra module
fs.removeSync(buildPath);

// path to campain contract 
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
// read in source code
const source = fs.readFileSync(campaignPath, 'utf8');

// compile what we pulled out
// one is campaign and other is factory
const output = solc.compile(source, 1).contracts;
// recreate build folder
fs.ensureDirSync(buildPath);

// write inside the build directory
// get the key=contract
for (let contract in output){
    fs.outputJsonSync(
        //that is why we have ':' before Campaign
        // second argumenet is the actual content written to the file
        path.resolve(buildPath, contract.replace(':','') + '.json'),
        output[contract]
    );
}