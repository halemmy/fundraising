const Cause = require("../models/causes");

const createCause = async (req, res) => {
  try {
    const {
      campaignName,
      campaignDescription,
      campaignTarget,
      imgURL,
      program,
      project,
      projectArea,
    } = req.body;
    const cause = new Cause({
      campaignName,
      campaignDescription,
      campaignTarget,
      imgURL,
      program,
      project,
      projectArea,
    });
    await cause.save();
    res.status(201).json({
      success: true,
      data: cause,
      message: `Cause ${cause.campaignName} created`,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

const getCauseInfo = async (req, res) => {
  const causeId = req.params.id;
  const cause = await Cause.findById(causeId);
  if (!cause) {
    res.status(400).json({
      success: false,
      error: "Cause not found",
    });
  } else
    return res.status(200).json({
      succes: true,
      data: { cause },
      message: "Cause ${cause.id} found!",
    });
};

const editCause = async (req, res) => {
  const causeId = req.req.params.id;
  const cause = await Cause.findByIdAndUpdate(
    causeId,
    {
      campaignName: req.body.campaignName,
      campaignTarget: req.body.campaignTarget,
      campaignDescription: re.body.campaignDescription,
      imgURL: req.body.imgURL,
      program: req.body.program,
      project: req.body.project,
      projectArea: req.body.projectArea,
    },
    { new: true }
  );
  res.send(cause);
};

const getCurrentCause = async (req, res, next) => {
  const causeId = req.req.params.id;
  const cause = await Cause.findById(causeId);
  if (!cause)
    return res.status(400).json({ success: false, error: "Cause not found!" });
  return res.status(200).json({
    success: true,
    data: cause,
    message: "Get current cause successfully!",
  });
  next;
};

const getAllCause = async (req, res) => {
  try {
    const causes = await Cause.find({});
    res.status(200).json({
      success: true,
      data: causes,
      message: `${causes.length} causes found!`,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

module.exports = {
  createCause,
  getCauseInfo,
  editCause,
  getCurrentCause,
  getAllCause,
};
