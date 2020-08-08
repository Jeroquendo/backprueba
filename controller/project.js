
var User = require('../models/project');

var controller = {
    enviarDatos: function (req, res) {

        var user = new User();
        params = req.body;
    
        user.email = params.email;
        user.password = params.password;

        if ((user.email === '') && (user.password === '')) {
            return res.status(200).send({ message: 'Por favor llenas los dos campos', valid:false });
        } else if (user.password === '') {
            return res.status(200).send({ message: 'El campo password es obligatorio', valid:false });
        } else if (user.email === '') {
            return res.status(200).send({ message: "El campo usuario es obligatorio", valid:false });
        } else{
            this.validarCorreo(user.email,res);
        }
    },

}

  validarCorreo = (email,res) =>{
    var rex = /\S+@\S+\.\S+/;
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth();
    const hora = fecha.getHours()+ ':'+ fecha.getMinutes();
    if(rex.test(email)){
        return res.status(200).send({ message: 'Correcto, usuario logueado el día '+ dia+ ' a las '+ hora, valid:true });
    }else{
        return res.status(200).send({ message: 'Correo invalido', valid:false });
    }
}

module.exports = controller;