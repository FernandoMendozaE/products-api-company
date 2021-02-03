/**
 * ? Crea roles cuando se inicia el servicio
 */

import Role from '../models/Role';

export const createRoles = async () => {

    try {
        const count = await Role.estimatedDocumentCount() // Contar si existe documentos
        if (count > 0) return;
    
        const  values = await Promise.all([ // Guarda todo los roles
            new Role({name: 'user'}).save(),
            new Role({name: 'moderator'}).save(),
            new Role({name: 'admin'}).save()
        ])
        console.log(values)

    } catch (error) {
        console.log(error)
    }

}