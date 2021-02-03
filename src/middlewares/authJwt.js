/**
 * ? Archivo encargado de verificar el token
 */
import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/User';
import Role from '../models/Role';

export const verifyToken = async (req, res, next) => { // ! middlewares para que verifique el token si pasa continua
   try {
       const token = req.headers["x-access-token"] // * obtiene el token del req
       
    //    console.log(token)
    
       if (!token) return res.status(403).json({message: "No token provided"}) // * validar cabecera del token
    
       const decoded = jwt.verify(token, config.SECRET) // * verificar el token que trae en el req
    //    console.log(decoded)
       
       req.userId = decoded.id
       const user = await User.findById(req.userId, {password: 0}) // comprobar si exite el _id usuario en la bd
       if (!user) return res.status(404).json({message: 'no user found'})
    
       next()
       
   } catch (error) {
       return res.status(401).json({message: 'Unauthorrize'}) // * token no autorizado
   }

}

// Validar Roles
export const isModerator = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}}) // trae todo los roles relacionado a la busque
    console.log(roles)

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
            next()
            return
        }
        
    }
    
    return res.status(403).json({message: 'Require Moderator role'})
}

export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}}) // trae todo los roles relacionado a la busque
    console.log(roles)

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
            next()
            return
        }
        
    }
    
    return res.status(403).json({message: 'Require Admin role'})
}
 