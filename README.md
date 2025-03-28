## **Parte 1: Configuración del Repositorio**

1. Crea un repositorio local en tu máquina.
2. Crea un repositorio remoto en GitHub y vincúlalo con el repositorio local.

---

## **Parte 2: Corrección de Código en JavaScript**

3. Crea un archivo JavaScript en el repositorio local.
4. Copia el siguiente código en tu archivo:

```js
function verificarEdad(edad) {
    let mensaje;

    if (edad = 18) mensaje = "Justo tienes 18"; 

    if (edad > 18) mensaje = "Eres mayor de edad";

    if (edad < 18) mensaje = "Eres menor de edad"; 

    if (edad >= 21) permiso = "Puedes beber alcohol"; 

    console.log(mensaje, permiso, resultadoFinal);
}

verificarEdad(20);
// 'Eres mayor de edad'
```

5. **Corrige los errores** que encuentres y consideres como tal en el código. La ejecución correcta del script debe imprimir en consola la respuesta que está en el comentario al final del código.

---

## **Parte 3: Configuración y Ejecución con Docker Compose**

6. Crea un archivo docker compose en el repositorio local.
7. Usa la plantilla brindad en el Gist con información del Docker Compose como base y **ajústala correctamente** con la imagen especificada en el comentario.
8. Levanta el servicio con Docker Compose en modo **desanclado (detached)**.
9. Ingresa al contenedor de forma interactiva usando el siguiente comando `docker exec -it <CONTAINER_ID> sh`.
10. Ejecuta el archivo de JavaScript dentro del contenedor y verifica que el resultado sea el esperado.

---

## **Parte 4: manejo de GitHub**

12. Sube el archivo de JavaScript al repositorio remoto, evitando subir el docker compose.
