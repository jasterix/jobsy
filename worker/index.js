// go to crontab.guru for syntax
// this is for every second: * * * * * *
// To run this file:
// node worker/index.js;

var CronJob = require("cron").CronJob;
new CronJob(
  "* * * * * *",
  function() {
    console.log("You will see this message every second");
  },
  null,
  true,
  "America/Los_Angeles"
);
