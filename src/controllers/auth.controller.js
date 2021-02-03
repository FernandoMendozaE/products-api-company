import User from '../models/User'; // * importando modulo
import jwt from 'jsonwebtoken'; // * importando token
import config from '../config';  // * contraseña secret
import Role from '../models/Role';


export const signUp = async (req, res) => {
    const {username, email, password, roles} = req.body;

    // const userFound = User.find({email}) // buscar al usuario si exite

    const newUser = new User({ // instanciandiando una clase User
        username,
        email,
        password: await User.encryptPassword(password)
    })

    // Guardando relación Roles
    if (roles) {
        const foundRoles = await Role.find({name: {$in: roles}}) // busca n-roles si existe en la bd
        newUser.roles = foundRoles.map(roles => roles._id) // mapeo de busque {roles: ['asdasd', 'sdad]}
    } else {
        const role = await Role.findOne({name: "user"})
        newUser.roles = [role._id]
    }

    console.log(newUser)
    const savedUser =  await newUser.save()  // guardado User en la bd

    /**
     * * P1: Dato que se guradara en el token
     * * P2: Palabra secreta para generar el token
     * * P3: Objeto de configuración
     */
    const token = jwt.sign({id: savedUser._id}, config.SECRET, { 
        expiresIn: 86400 // 24 hours
    })

    res.status(200).json({token})
}

export const signIn = async (req, res) => {
    const userFound = await User.findOne({email: req.body.email}).populate("roles"); // poblar roles en formato
    console.log(userFound)

    if (!userFound) return res.status(400).json({message: "User not found"})

    // Validar password
    const matchPassword = await User.comparePassword(req.body.password, userFound.password)
    if (!matchPassword) return res.status(401).json({token: null, message: 'Invalid password'})

    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 86400
    })

    res.json({token})
}