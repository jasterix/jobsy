// To run file: node worker/tasks/fetch-github.js

var fetch = require("node-fetch");
const baseURL = "https://jobs.github.com/positions.json";
// description = ruby & page=1"

async function fetchGithub() {
  let resultCount = 1,
    onPage = 0;
  const allJobs = [];

  while (resultCount > 0) {
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const jobs = await res.json();

    allJobs.push(jobs);
    resultCount = jobs.length;

    console.log("got", resultCount, "jobs");

    onPage++;
  }
  console.log(allJobs.length);
}
fetchGithub();
module.exports = fetchGithub;
