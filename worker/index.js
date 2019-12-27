// go to crontab.guru for syntax
// this is for every second: * * * * * *

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
