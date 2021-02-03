/**
 *  ? Archivo encargado de crear el modelo de Product
 */
import {Schema, model} from 'mongoose';

const productSchema =  new Schema ({ // * creanfo modelo
    name: String,
    category: String,
    price: Number,
    imgURL: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('Product', productSchema)