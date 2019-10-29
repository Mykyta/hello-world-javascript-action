const core = require('@actions/core');
const github = require('@actions/github');

try {
  const nameToGreet = core.getInput('name');
  console.log(`Your name is ${nameToGreet}!`);
} catch (error) {
  core.setFailed(error.message);
}
