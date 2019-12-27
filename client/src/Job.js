import React from "react";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

export default function Job({ job }) {
  return (
    <div className="job">
      {job.title} {job.company}
    </div>
  );
}
