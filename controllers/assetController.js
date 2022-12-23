const { Asset, Family } = require('../models');
const { createError } = require('../utils/error.js')


exports.getAssets = async (req, res, next) => {
  try {
    const assets = await Asset.findAll();
    res.status(200).json({status: "Success", asset: "Success", assets});
  } catch (error) {
      next(error);
  }
}

exports.getAsset = async (req, res, next) => {
  try {
    const asset = await Asset.findByPk(req.params.id);

    res.status(200).json({status: "Success", asset: "Success", asset});
  } catch (error) {
    next(error);
  }
}

exports.createAsset = async (req, res, next) => {
  try {
    const family = await Family.findByPk(req.params.id);
    if(!family) return next(createError(404, "Family not exist"));
    const asset = {
      familyId: req.params.id,
      ...req.body
    }
    const data = await Asset.create(asset);
    res.status(200).json({status: "Success", message: "Success", asset: data});
  } catch (error) {
      next(error);
  }
}

exports.updateAsset = async (req, res, next) => {
  try {
    const asset = await Asset.findByPk(req.params.id);
    if(!asset) return next(createError(404, "Asset not exist"));

    asset.set(req.body);
    const data = await asset.save();
    res.status(200).json({status: "Success", message: "Success", asset: data});
  } catch (err) {
    next(err);
  }
}

exports.deleteAsset = async (req, res, next) => {
  try {
    const asset = await Asset.findByPk(req.params.id);
    if(!asset) return next(createError(404, "Asset not exist"));
    
    await asset.destroy();
    res.status(200).json({status: "Success", message: "Success", data: asset});
  } catch (err) {
    next(err);
  }
}