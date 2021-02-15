/**
 * ? Métodos encargados de recibir y realizar tratado de informacioón CRUD
 */
import Product from '../models/Product';

export const createProduct = async (req, res) => {
  // * Registrar un nuevo producto
  const { name, category, price, imgURL } = req.body;
  const newProduct = new Product({ name, category, price, imgURL });
  const productSaved = await newProduct.save();

  res.status(201).json(productSaved);
};

export const getProducts = async (req, res) => {
  // * Obtener los productos
  const products = await Product.find();
  res.json(products);
};

export const getProductById = async (req, res) => {
  // * Obtener un solo (Id_) producto
  const product = await Product.findById(req.params.productId);
  res.status(200).json(product);
};

export const updateProductById = async (req, res) => {
  // * Actualizar un (Id_) producto
  const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
    new: true,
  });
  res.status(200).json(updatedProduct);
};

export const deleteProductById = async (req, res) => {
  // * Eliminación un (Id_) producto
  const { productId } = req.params;
  await Product.findByIdAndDelete(productId);
  res.status(204).json();
};
