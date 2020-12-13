const router =require('express').Router(); //se llama al router de express
const models = require('../../models');
const userController=require('../../controllers/UserController.js');//importamos el archivo del controlador
const bcrypt =require('bcryptjs');


//.com/api/usuario/
router.get('/',async(req,res)=>{

    const user = await models.user.findAll();
    res.status(200).json(user)

});

//.com/api/usuario/register
router.post('/register',async(req,res)=>{
    req.body.password = bcrypt.hashSync(req.body.password,10);//enciptamos la contraseña
    const user = await models.user.create(req.body);
    res.status(200).json(user)

});

// router.get('/listar', usuarioController.listar)
// router.post('/register', usuarioController.register) //esta es la tarea, se tendría que eliminar la linea 2y 3 tambien

//.com/api/usuario/login
router.post('/signin', userController.signin);

// router.put('/actualizar', usuarioController.actualizar);


module.exports = router;