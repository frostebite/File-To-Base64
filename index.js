const core = require('@actions/core');
var base64 = require('file-base64');

// most @actions toolkit packages have async methods
async function run() {
  try { 
    const filePath = core.getInput('filePath');
    let promise = new Promise(function(resolve, reject) {
      base64.encode(filePath, function(err, base64String) {
        if(err){
          core.info("Failed to base64 encode "+filePath)
          core.error(err);
          reject(err);
        }
        core.info("Base64 encode successful of"+filePath)
        core.setOutput('base64', base64String);
        resolve();
      });
    });
    await promise;
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
