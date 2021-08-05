const mongoose = require("mongoose");

const causesSchema = new mongoose.Schema(
  {
    campaignName: {
      type: String,
      required: [true, "Causes must have an campaign"],
      trim: true,
    },
    campaignDescription: {
      type: String,
      required: [true, "Causes must have an campaign"],
      trim: true,
    },
    campaignTarget: {
      type: Number,
      required: [true, "Causes must have a fundraising target"],
    },
    imgURL: {
      type: String,
      required: [true, "Causes must have a photo"],
    },
    // campaigntimeToDeliver: {
    //   type: Date,
    //   required: [true, "Causes must provide delivery date."],
    // },
    program: {
      type: String,
      required: [true, "Causes must be under a program"],
    },
    project: {
      type: String,
      required: [true, "Causes must be under a project"],
    },
    projectArea: {
      type: String,
      required: [true, "Causes must have a project area"],
      trim: true,
      minLength: 3,
    },
  },
  { timestamps: true }
);

const Cause = mongoose.model("Cause", causesSchema);
module.exports = Cause;
