import {Schema, model} from 'mongoose';
import bcryptjs from 'bcryptjs';

const userSchema = new Schema({ // * Crear modelo User
    username:{
        type:String,
        unique:true,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    roles: [
        {
            ref: "Role",
            type: Schema.Types.ObjectId // ! Relazionando Model Role
        }
    ]
}, {
    timestamps: true,
    versionKey: false
});

/** Encriptar contraseña
 * @param {Método encargado de recibir una contraseña} password 
 */
userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10)
    console.log('salt', salt)
    return await bcryptjs.hash(password, salt)
}
/**
 * Compará los password
 * @param {recibe password guardado en BD} password 
 * @param {password comparar} receivedPassword 
 */
userSchema.statics.comparePassword = async (password, receivedPassword) => { 
    return await bcryptjs.compare(password, receivedPassword)
}

export default model('User', userSchema)