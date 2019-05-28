# MELI-ADA CHALLENGE

## Observaciones

- El proyecto utiliza Node, Express y Jade como template-engine. No se usan librerías para JS. 
- Todas las validaciones se realizan usando RegEx.
- Por falta de tiempo, no se pudieron agregar tests a la aplicación, aunque sí hay acciones en la tabla. 
- Para correr el proyecto: 
```
$ npm install
$ npm start
```

## Requerimientos

Se requiere se construya una aplicación cliente/servidor con ExpressJs con los siguientes requerimientos:
#### SERVER-SIDE
- Atienda a la ruta “/ping” y devuelva la palabra “pong”
- Al ingresar a la ruta “/user/form” (raíz) renderice un formulario con los siguientes datos:
	- Nombre (Máximo 30 caracteres)
	- Apellido (Máximo 30 caracteres)
	- Teléfono (Solo números)
	- Email (Formato válido usando regular expressions)
- Que al hacer submit envíe esos datos por método POST a la ruta “/user” (raíz), los guarde/agregue en un archivo y haga una redirección a la ruta “/user/list”.
- Al recibir el post, escribir la información validada en un archivo.
- Al ingresar a la ruta “/user/list” renderice un listado con los datos que pedimos en el paso anterior, levantando la información del archivo generado, usando algún template engine.
- Agregar validación en base a la información asociada a cada campo.
#### CLIENT-SIDE
- Agregar validación en base a la información asociada a cada campo.
- La información deberá ser mostrada en una tabla filtrable y con campo de búsqueda como la de bootstrap.

#### GENERALES
- Documentar la solución utilizando http://usejsdoc.org/
-  Subir el código a un repositorio de github

#### ADICIONALES NO MANDATORIOS
- Se valorará contar con test de la aplicación, preferentemente unitarios.
- Se valorará contar con acciones en la tabla, como por ejemplo poder eliminar al usuario o editarlo.

