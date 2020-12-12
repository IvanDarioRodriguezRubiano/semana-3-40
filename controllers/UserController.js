const models = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); //importo el jsonwebtoken
const { response } = require('express');
exports.signin = async (req, res, next) => { //el ext es por si el programa se queda en algún error, no se pegue y pueda seguir avanzando
    try {
        const user = await models.user.findOne({ where: { email: req.body.email } }); //consultar si el usuario existe find one es que encuentre uno, con que encuentre uno es suficiente
        if (user) {//si el usuario existe
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (passwordIsValid) {//si es password es valido creamos el token
                const token = jwt.sign({
                    id: user.id,
                    nombre: user.nombre,
                    rol: user.rol,
                    email: user.email
                }, 'hola soy una cadena secreta', {
                    expiresIn: 86400 //el numero es en segundos
                });
                res.status(200).send({
                    auth: true, accessToken: token, //user: user //acá es donde va acces token se cambia el tokenreturn por este y en el front tambien
                });//parametros que se van a mandar, llave secreta
            } else {
                res.status(401).json({
                    error: 'Error en la validación p'
                })
            }

        } else {
            res.status(404).json({
                error: 'Error en la validación u'
            })

        }
    } catch (error) {
        res.status(500).send({
            error: 'Error!!!'
        })

        next(error);//el next ayuda a que el backend no se quede pegado en el catch cuando ocurre el error.

    }
};