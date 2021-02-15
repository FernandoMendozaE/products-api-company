/**
 * ? Ruteo de rutas express
 */
import { Router } from 'express';
const router = Router();

import * as productsCtrl from '../controllers/products.controller';
import { authJwt } from '../middlewares'; // *exportando middlewares

router.post('/', [authJwt.verifyToken, authJwt.isModerator], productsCtrl.createProduct); // *enviar

router.get('/', productsCtrl.getProducts); // *obtener

router.get('/:productId', productsCtrl.getProductById); // * obtener parametro

router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productsCtrl.updateProductById); // * actualizar parametro

router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productsCtrl.deleteProductById); // * eliminar parametro

export default router;
