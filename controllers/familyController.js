const { Family, Asset } = require('../models');
const sequelize = require('sequelize');
const { createError } = require('../utils/error.js')


exports.getFamilies = async (req, res, next) => {
  try {
    const family = await Family.findAll();
    res.status(200).json({status: "Success", message: "Success", family});
  } catch (error) {
      next(error);
  }
}

exports.getFamily = async (req, res, next) => {
  try {
    const family = await Family.findByPk(req.params.id);

    res.status(200).json({status: "Success", family: "Success", family});
  } catch (error) {
    next(error);
  }
}

exports.createFamily = async (req, res, next) => {
  try {
    const family = await Family.create(req.body);
    res.status(200).json({status: "Success", message: "Success", family: family});
  } catch (error) {
      next(error);
  }
}

exports.updateFamily = async (req, res, next) => {
  try {
    const family = await Family.findByPk(req.params.id);
    if(!family) return next(createError(404, "Family not exist"));
    family.set(req.body);
    const data = await family.save();
    res.status(200).json({status: "Success", message: "Success", family: data});
  } catch (err) {
    next(err);
  }
}

exports.deleteFamily = async (req, res, next) => {
  try {
    const family = await Family.findByPk(req.params.id);
    if(!family) return next(createError(404, "Family not exist"));
    await family.destroy();
    res.status(200).json({status: "Success", message: "Success", family: family});
  } catch (err) {
    next(err);
  }
}

exports.familyAssets = async (req, res, next) => {
  try {
    
    const family = await Family.findAll({
    attributes: [ 'id', 'name', 'gender', 'parent',[sequelize.fn('SUM',sequelize.col('Assets.price')), 'total price']],  
    include: [{
      model: Asset,
      attributes: [],
    }],
    group: ['Family.id'],
    raw: true,
    order: [[ 'total price', 'ASC']]});
    res.status(200).json({status: "Success", message: "Success", family});
  } catch (error) {
      next(error);
  }
}