import {Router} from 'express'
const router = Router()

import * as userCrtl from '../controllers/user.controller';
import {authJwt, verifySignup} from '../middlewares';

router.get('/', [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkRolesExisted
], userCrtl.createUser)

export default router
