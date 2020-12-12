const router =require('express').Router(); //se llama al router de express
const apiRouterUser = require('./api/users.js')

router.use('/auth',apiRouterUser);//manejador de las rutas de usuario
//.com/api/usuario  todas se manejarian desde acá las que tengan que ver con usuario
//.com/api/usuario/listar
//.com/api/usuario/crear
//.com/api/usuario/login


module.exports = router;

// /api/usuario/login 