const ProductModel = require('../models/productModel');
const ApiError = require('../middlewares/ApiError');

const getProducts = async (_req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  if (!id) return ApiError.error(400, 'Id não encontrado');
  const product = await ProductModel.getById(id);

  res.status(200).json(product);
};

const addProduct = async (req, res) => {
  const { name, brand } = req.body;
  if (!name || typeof(name) !== 'string') return ApiError.error(400, 'Insira um nome válido');
  if (!brand || typeof(brand) !== 'string') return ApiError.error(400, 'Insira uma brand válida');
  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
};

const deletesProduct =  async (req, res) => {
  const { id } = req.params;
  if (!id) return ApiError.error(400, 'Id não encontrado');
  const products = await ProductModel.exclude(id);

  res.status(204).json(products);
};

const updatesProduct = async (req, res) => {
  const { id } = req.params;
  const { name, brand } = req.body;
  if (!id) return ApiError.error(400, 'Id não encontrado');
  if (!name || typeof(name) !== 'string') return ApiError.error(400, 'Insira um nome válido');
  if (!brand || typeof(brand) !== 'string') return ApiError.error(400, 'Insira uma brand válida');
  const products = await ProductModel.update(id, name, brand);

  res.status(200).json(products);
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  deletesProduct,
  updatesProduct
};