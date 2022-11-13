const jwt = require("jsonwebtoken");

 function authPaciente (req, res, next) {
  //leer el token del header
  const token = req.header("x-auth-token");

  //revisar si no hay token

  if (!token) {
    return res.status(400).json({ msg: "No hay token, Permiso no válido" });
  }

  //validar token

  try {
    const cifrado = jwt.verify(token,process.env.SECRETA)
    req.paciente=cifrado.paciente;
    next();

  } catch (error) {
    res.status(400).json({msg:"Token no válido"})
  }

};

module.exports = authPaciente;