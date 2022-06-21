export interface IRespuesta {
    exito: boolean,
    mensaje: string,
    data?: any
}

export interface IAuth {
    token: string,
    infUsuario: {
        nombre: string,
        apellidoPaterno: string,
    }
}

export interface clientCredentials {
    username: string,
    password: string
}