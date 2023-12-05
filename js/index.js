import cerrarVentanaLogin from "./login/cerrarLogin.js";
import iniciarSecion from "./login/iniciarSecion.js";
import validarUsuario from "./login/validarUsuario.js";
import watchPassword from "./login/watchPassword.js";

const usuarios = [{
    usuario: "admin01",
    password: "admin01"
},{
    usuario: "admin02",
    password: "admin02"
}
];

iniciarSecion();
cerrarVentanaLogin();
watchPassword();
validarUsuario(usuarios);