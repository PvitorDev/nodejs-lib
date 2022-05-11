#!/usr/bin/env node

const chalk = require("chalk")

const TakeArch = require("./index")

const validURLs = require("./http-validacao")

const path = process.argv


async function processText(pathArch){
    const result = await TakeArch(pathArch[2]);
    if(path[3] === 'validar'){
        console.log(chalk.blue('Valid Links'), await validURLs(result));
    }else{
        console.log(chalk.yellow('Link list'), result);
    }
}

processText(path)