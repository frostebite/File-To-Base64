const core = require('@actions/core');
const base64 = require('file-base64');
const path = require('path');
const untildify = require('untildify');
 
// most @actions toolkit packages have async methods
async function run() {
  try { 
    const filePath = untildify(core.getInput('filePath'));
    let promise = new Promise(function(resolve, reject) {
      base64.encode(path.normalize(filePath), function(err, base64String) {
        if(err){
          core.info("Failed to base64 encode "+filePath)
          core.error(err);
          reject(err);
          return;
        }
        core.info("Base64 encode successful of"+filePath);
        core.setSecret(base64String);
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
