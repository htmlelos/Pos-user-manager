# Requisitos

Login/signup de usuarios con bcrypt y jwt, esos usuarios pueden modificar sus datos (nombre apellido dni), y además pueden cargar N hijos, esos hijos se pueden loguear y solo ver sus propios datos y los padres pueden modificar los datos de sus propios hijos (nombre apellido y dni) y un endpoint que traiga un listado con todos los hijos, con un limite de 10 para que vea el tema del skip and limit

## Registro

### Pruebas

- Recibe una peticion POST en la ruta api/signup
- Validar los datos obligatorios email y password y confirmacion de Password
- Validar que el password y la confirmacion sean iguales
- Validar que el campo email sea una dirección de correo válida
- Validar si ya existe un usuario con dicha contraseña
- Generar una contraseña encriptada
- Crear una cuenta para el usuario con los datos informados, substituyendo la contraseña por la contraseña encriptada
- Generar un token de acceso a partir del id del usuario
- Actualiza los datos del usuario con el token de acceso generado
- Devuelve 200 y con el token de acceso y el nombre del usuario

### Excepciones

- Retornar error 404 si la ruta api/signup no existe
- Retornar error 400 si email, password o la confirmacion de la contraseña no fueron provistos por el cliente
- Retorna error 400 si el password y la confirmacion de contraseña no son iguales
- Retorna error 400 si el campo del email no es una dirección de correo válida
- Retorna error 403 si el mail provisto ya se encuentra en uso
- Retorna error 500 si ocurrio un error al generar una contraseña encriptada
- Retorna error 500 si ocurrio un error al generar el token de acceso
- Retorna error 500 si ocurrio un error al intantar actualizar un usuario con el usuario con token de acceso generado
