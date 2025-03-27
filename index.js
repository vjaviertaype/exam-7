function verificarEdad(edad) {
  // el permiso no es necesario inicializarlo con un valor
  let permiso

  // como si o si tendra un mensaje, me parece mejor utilizar una constante, es innecesario pero me parece mas claro
  const mensaje = (edad == 18) ? "Justo tienes 18" : (edad > 18) ? "Eres mayor de edad" : "Eres menor de edad";

  // si es mayor o igual a 21 entonces se le asigna el string
  if (edad >= 21) permiso = "Puedes beber alcohol";

  console.log(mensaje, permiso);
}

verificarEdad(20);
// 'Eres mayor de edad'

verificarEdad(21);