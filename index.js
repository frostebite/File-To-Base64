const core = require('@actions/core');
const wait = require('./wait');
const fs = require('fs');

// most @actions toolkit packages have async methods
async function run() {
  try { 
    const filePath = core.getInput('filePath');
    console.log(`Waiting ${ms} milliseconds ...`)

    core.debug((new Date()).toTimeString())
    await wait(parseInt(ms));
    core.debug((new Date()).toTimeString())

    core.setOutput('time', new Date().toTimeString());
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
